const express = require("express");
const { cntrWrapper, auth } = require("../../middlewares");
const { users: cntr } = require("../../controllers");
const router = express.Router();

router.get("/current", auth, cntrWrapper(cntr.getCurrent));
module.exports = router;
