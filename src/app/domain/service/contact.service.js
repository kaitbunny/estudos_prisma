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
        return this.repository.findById(id);
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