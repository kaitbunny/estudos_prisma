const { PrismaClient } = require('@prisma/client');
const Contact = require('./Contact');

const prisma = new PrismaClient();

class ContactRepository {
  /**
   * @param {Contact} contact
   * @returns {Promise<Contact>}
   */
  async create(contact) {
    const data = {
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      birthday: contact.birthday,
      profession: contact.profession,
      doesPhoneNumberHaveWhatsapp: contact.doesPhoneNumberHaveWhatsapp,
      canReceiveEmails: contact.canReceiveEmails,
      canReceiveSms: contact.canReceiveSms,
    };

    const createdContact = await prisma.contact.create({ data });
    
    return new Contact(createdContact);
  }

  /**
   * @param {number} id
   * @returns {Promise<Contact|null>}
   */
  async findById(id) {
    const contactData = await prisma.contact.findUnique({
      where: { id },
    });

    if (!contactData) {
      return null;
    }

    return new Contact(contactData);
  }

  /**
   * @returns {Promise<Contact[]>}
   */
  async findAll() {
    const contactsData = await prisma.contact.findMany();
    return contactsData.map(data => new Contact(data));
  }

  /**
   * @param {number} id
   * @param {Contact} contact
   * @returns {Promise<Contact>}
   */
  async update(id, contact) {
    const data = {
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      birthday: contact.birthday,
      profession: contact.profession,
      doesPhoneNumberHaveWhatsapp: contact.doesPhoneNumberHaveWhatsapp,
      canReceiveEmails: contact.canReceiveEmails,
      canReceiveSms: contact.canReceiveSms,
    };

    const updatedContact = await prisma.contact.update({
      where: { id },
      data,
    });

    return new Contact(updatedContact);
  }

  /**
   * @param {number} id
   * @returns {Promise<Contact>}
   */
  async delete(id) {
    const deletedContact = await prisma.contact.delete({
      where: { id },
    });
    return new Contact(deletedContact);
  }
}

module.exports = ContactRepository;