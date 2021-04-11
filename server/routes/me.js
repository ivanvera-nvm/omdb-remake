const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
const tokenMiddleware = require("../middleware/tokenMiddleware");

router.get("/", tokenMiddleware, authController.authorized);

module.exports = router;