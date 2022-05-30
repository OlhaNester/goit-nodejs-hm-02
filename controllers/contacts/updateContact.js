const contactsOperations = require("../../models/contacts");
const createError = require("Http-errors");

const updateContact = async (req, res) => {
  const { id } = req.params;

  const result = await contactsOperations.updateContact(id, req.body);
  if (!result) {
    throw createError(404, `Product with id=${id} is not found`);
  }
};

module.exports = updateContact;
