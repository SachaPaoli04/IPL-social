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

  


}

module.exports = Main;

