const Validator = require("../../utils/validator.utils");
const AppException = require("../exception/app.exception");
const ContactRepository = require("../repository/contact.repository");

class ContactService {

    repository;

    constructor() {
        this.repository = new ContactRepository();
    }

    async findAll() {
        let contacts = await this.repository.findAll();
        contacts = contacts.map(contact => contact.toJSON());

        return contacts;
    }

    async findById(id) {
        if(Validator.isNumberValid(id) == false) {
            throw new AppException("ID must be a number.", 400);
        }

        return this.repository.findById(parseInt(id));
    }

    async create(contact) {
        return this.repository.create(contact);
    }

    async update(id, contact) {
        return this.repository.update(id, contact);
    }

    async delete(id) {
        return this.repository.delete(id);
    }
}

module.exports = ContactService;