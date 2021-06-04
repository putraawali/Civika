const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(8);

const hash = (pass) => {
  return bcrypt.hashSync(pass, salt);
};

const compare = (pass, hashedPass) => {
  return bcrypt.compareSync(pass, hashedPass);
};

module.exports = {
  hash,
  compare,
};
