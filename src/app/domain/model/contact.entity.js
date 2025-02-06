class Contact {
  id;
  name;
  email;
  phone;
  birthday;
  profession;
  doesPhoneNumberHaveWhatsapp;
  canReceiveEmails;
  canReceiveSms;

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
      throw new Error("Id is required");
    }

    if (typeof value !== "number") {
      throw new Error("Id must be a number");
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
      throw new Error("Name is required");
    }

    if (typeof value !== "string") {
      throw new Error("Name must be a string");
    }

    if (value.length < 3) {
      throw new Error("Name must have at least 3 characters");
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
      throw new Error("Email is required");
    }

    if (typeof value !== "string") {
      throw new Error("Email must be a string");
    }

    if (Validator.isEmailValid(value) === false) {
      throw new Error("Email is invalid");
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
      throw new Error("Phone is required");
    }

    if (Validator.isPhoneNumberValid(value) === false) {
      throw new Error("Phone number is invalid");
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
      throw new Error("Birthday is required");
    }

    if (value instanceof Date === false) {
      throw new Error("Birthday must be a date");
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
      throw new Error("Profession is required");
    }

    if (typeof value !== "string") {
      throw new Error("Profession must be a string");
    }

    if (value.length < 3) {
      throw new Error("Profession must have at least 3 characters");
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
      throw new Error("Does phone number have whatsapp is required");
    }

    if (typeof value !== "boolean") {
      throw new Error("Does phone number have whatsapp must be a boolean");
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
      throw new Error("Can receive emails is required");
    }

    if (typeof value !== "boolean") {
      throw new Error("Can receive emails must be a boolean");
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
      throw new Error("Can receive sms is required");
    }

    if (typeof value !== "boolean") {
      throw new Error("Can receive sms must be a boolean");
    }

    this._canReceiveSms = value;
  }

  get canReceiveSms() {
    return this._canReceiveSms;
  }
}

module.exports = Contact;
