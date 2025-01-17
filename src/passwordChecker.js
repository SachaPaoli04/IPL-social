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


}

module.exports = Main;

