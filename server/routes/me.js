const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");
const tokenMiddleware = require("./tokenMiddleware");
const { User, Cadeteria } = require("../models/index");

router.get("/", tokenMiddleware, auth.authorized);
