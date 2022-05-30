const contactsOperations = require("../../models/contacts");
const createError = require("Http-errors");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.removeContact(id);
  console.log(result);
  if (!result) {
    throw createError(404, `Product with id=${id} is not found`);
  }

  res.json({
    status: "success",
    message: "contact deleted",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = removeContact;
