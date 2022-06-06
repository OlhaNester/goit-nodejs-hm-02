const express = require("express");
const { validation, cntrWrapper } = require("../../middlewares");
const { joiSchema } = require("../../models/contact");
const validateMiddlware = validation(joiSchema);

const { contacts: cntr } = require("../../controllers");

const router = express.Router();

router.get("/", cntrWrapper(cntr.listContacts));

router.get("/:id", cntrWrapper(cntr.getContactById));

router.post("/", validateMiddlware, cntrWrapper(cntr.addContact));

router.delete("/:id", cntrWrapper(cntr.removeContact));

router.put("/:id", validateMiddlware, cntrWrapper(cntr.updateContact));

router.patch(
  "/:id/favorite",
  validateMiddlware,
  cntrWrapper(cntr.updateStatusContact)
);

module.exports = router;
