const express = require("express");
const { validation, cntrWrapper } = require("../../middlewares");
const { auth: cntr } = require("../../controllers");

const { joiSingUpSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();
router.post("/signup", validation(joiSingUpSchema), cntrWrapper(cntr.singup));

router.post("/login", validation(joiLoginSchema), cntrWrapper(cntr.login));

module.exports = router;
