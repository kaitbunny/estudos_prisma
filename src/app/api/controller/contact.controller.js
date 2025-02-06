const ContactService = require("../../domain/service/contact.service");

class ContactController {
  service;

  constructor() {
    this.service = new ContactService();
  }

  async list(req, res, next) {
    try {
      const contacts = await this.service.findAll();
      res.json(contacts);
    } catch (error) {
      next(error);
    }
  }

  async findById(req, res, next) {
    try {
      const { id } = req.params;
      const contact = await this.service.findById(id);

      if (!contact) {
        res.status(404).json({ error: "Contact not found." });
        return;
      }

      res.json(contact);
    } catch (error) {
      next(error);
    }
  }
}

const contactController = new ContactController();

module.exports = {
  routes: [
    {
      method: "get",
      path: "/contacts",
      handler: contactController.list.bind(contactController),
    },
    {
      method: "get",
      path: "/contacts/:id",
      handler: contactController.findById.bind(contactController),
    },
  ],
};
