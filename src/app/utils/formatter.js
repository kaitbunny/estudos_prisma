class Formatter {
  static returnOnlyNumbers(value) {
    return value.replace(/\D/g, "");
  }

  static formatPhoneNumber(value) {
    return value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }
}
