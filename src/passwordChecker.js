class Main {
  validPasswordLength(password) {
    if (password.length < 8) {
      return false;
    }
    return true;
  }

  validPasswordSpecialChar(password) {
    if (password.match(/[^A-Za-z0-9]/)) {
      return true;
    }
    return false;
  }

  validPasswordDigit(password) {
    if (password.match(/\d/)) {
      return true;
    }
    return false;
  }

  validPasswordNoIPL(password) {
    if (password.match(/ipl/i)) {
      return false;
    }
    return true;
  }

  validPassword(password) {
    if (
      this.validPasswordLength(password) &&
      this.validPasswordSpecialChar(password) &&
      this.validPasswordDigit(password) &&
      this.validPasswordNoIPL(password)
    ) {
      return true;
    }
    return false;
  }


}

module.exports = Main;

