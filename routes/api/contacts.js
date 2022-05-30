const express = require("express");
const { validation, cntrWrapper } = require("../../middlewares");
const { contactSchema } = require("../../schemas");
const validateMiddlware = validation(contactSchema);

const { contacts: cntr } = require("../../controllers");

const router = express.Router();

router.get("/", cntrWrapper(cntr.listContacts));

router.get("/:id", cntrWrapper(cntr.getContactById));

router.post("/", validateMiddlware, cntrWrapper(cntr.addContact));

router.delete("/:id", cntrWrapper(cntr.removeContact));

router.put("/:id", validateMiddlware, cntrWrapper(cntr.updateContact));

module.exports = router;
