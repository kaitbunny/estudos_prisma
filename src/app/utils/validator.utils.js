class Validator {
  static isEmailValid(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  static isValueNotNull(value) {
    if (value === undefined || value === null || value === "") {
      return false;
    }
    return true;
  }

  static isPhoneNumberValid(phoneNumber) {
    const re = /^\d{11}$/;
    return re.test(phoneNumber);
  }

  static isNumberValid(number) {
    const re = /^\d+$/;
    return re.test(number);
  }
}

module.exports = Validator;