const Formatter = require("../../utils/formatter.utils");
const Validator = require("../../utils/validator.utils");
const AppException = require("../exception/app.exception");

class Contact {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.birthday = data.birthday;
    this.profession = data.profession;
    this.doesPhoneNumberHaveWhatsapp = data.doesPhoneNumberHaveWhatsapp;
    this.canReceiveEmails = data.canReceiveEmails;
    this.canReceiveSms = data.canReceiveSms;
  }

  /**
   * @param {number} value
   */
  set id(value) {
    if (Validator.isValueNotNull(value) === false) {
      throw new AppException("Id is required", 400);
    }

    if (typeof value !== "number") {
      throw new AppException("Id must be a number", 400);
    }

    this._id = value;
  }

  get id() {
    return this._id;
  }

  /**
   * @param {string} value
   */
  set name(value) {
    if (Validator.isValueNotNull(value) === false) {
      throw new AppException("Name is required", 400);
    }

    if (typeof value !== "string") {
      throw new AppException("Name must be a string", 400);
    }

    if (value.length < 3) {
      throw new AppException("Name must have at least 3 characters", 400);
    }

    this._name = value;
  }

  get name() {
    return this._name;
  }

  /**
   * @param {string} value
   */
  set email(value) {
    if (Validator.isValueNotNull(value) === false) {
      throw new AppException("Email is required", 400);
    }

    if (typeof value !== "string") {
      throw new AppException("Email must be a string", 400);
    }

    if (Validator.isEmailValid(value) === false) {
      throw new AppException("Email is invalid", 400);
    }

    this._email = value;
  }

  get email() {
    return this._email;
  }

  /**
   * @param {string} value
   */
  set phone(value) {
    if (Validator.isValueNotNull(value) === false) {
      throw new AppException("Phone is required", 400);
    }

    if (Validator.isPhoneNumberValid(value) === false) {
      throw new AppException("Phone number is invalid", 400);
    }

    this._phone = Formatter.returnOnlyNumbers(value);
  }

  get phone() {
    return Formatter.formatPhoneNumber(this._phone);
  }

  /**
   * @param {Date} value
   */
  set birthday(value) {
    if (Validator.isValueNotNull(value) === false) {
      throw new AppException("Birthday is required", 400);
    }

    if (value instanceof Date === false) {
      throw new AppException("Birthday must be a date", 400);
    }

    this._birthday = value;
  }

  get birthday() {
    return this._birthday;
  }

  /**
   * @param {string} value
   */
  set profession(value) {
    if (Validator.isValueNotNull(value) === false) {
      throw new AppException("Profession is required", 400);
    }

    if (typeof value !== "string") {
      throw new AppException("Profession must be a string", 400);
    }

    if (value.length < 3) {
      throw new AppException("Profession must have at least 3 characters", 400);
    }

    this._profession = value;
  }

  get profession() {
    return this._profession;
  }

  /**
   * @param {boolean} value
   */
  set doesPhoneNumberHaveWhatsapp(value) {
    if (Validator.isValueNotNull(value) === false) {
      throw new AppException("Does phone number have whatsapp is required", 400);
    }

    if (typeof value !== "boolean") {
      throw new AppException("Does phone number have whatsapp must be a boolean", 400);
    }

    this._doesPhoneNumberHaveWhatsapp = value;
  }

  get doesPhoneNumberHaveWhatsapp() {
    return this._doesPhoneNumberHaveWhatsapp;
  }

  /**
   * @param {boolean} value
   */
  set canReceiveEmails(value) {
    if (Validator.isValueNotNull(value) === false) {
      throw new AppException("Can receive emails is required", 400);
    }

    if (typeof value !== "boolean") {
      throw new AppException("Can receive emails must be a boolean", 400);
    }

    this._canReceiveEmails = value;
  }

  get canReceiveEmails() {
    return this._canReceiveEmails;
  }

  /**
   * @param {boolean} value
   */
  set canReceiveSms(value) {
    if (Validator.isValueNotNull(value) === false) {
      throw new AppException("Can receive sms is required", 400);
    }

    if (typeof value !== "boolean") {
      throw new AppException("Can receive sms must be a boolean", 400);
    }

    this._canReceiveSms = value;
  }

  get canReceiveSms() {
    return this._canReceiveSms;
  }

  /**
   * @returns {Object}
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      birthday: this.birthday,
      profession: this.profession,
      doesPhoneNumberHaveWhatsapp: this.doesPhoneNumberHaveWhatsapp,
      canReceiveEmails: this.canReceiveEmails,
      canReceiveSms: this.canReceiveSms,
    };
  }
}

module.exports = Contact;
