const express = require("express");
const { cntrWrapper, auth, upload } = require("../../middlewares");
const { users: cntr } = require("../../controllers");
const router = express.Router();

router.get("/current", auth, cntrWrapper(cntr.getCurrent));
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  cntrWrapper(cntr.updateAvatar)
);

module.exports = router;
