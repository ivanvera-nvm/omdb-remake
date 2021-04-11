const dotenv = require("dotenv").config();

/* 
PORT = 3000
 */

module.exports = {
/*     port: process.env.PORT, */
    apiKey: process.env.APY_KEY,
    detail: process.env.TEST_DETAIL,
    simple: process.env.TEST_SIMPLE,
  };
  