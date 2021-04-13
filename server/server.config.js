const dotenv = require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  portClient: process.env.PORT_CLIENT,
  passwordAdmin: process.env.PASSWORD,
  emailAdmin: process.env.EMAIL,
  saltAdmin: process.env.SALT,
};
