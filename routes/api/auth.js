const express = require("express");
const { auth, validation, cntrWrapper } = require("../../middlewares");
const { auth: cntr } = require("../../controllers");

const { joiSignUpSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();
router.post("/signup", validation(joiSignUpSchema), cntrWrapper(cntr.signup));

router.post("/login", validation(joiLoginSchema), cntrWrapper(cntr.login));

router.get("/logout", auth, cntrWrapper(cntr.logout));

module.exports = router;
