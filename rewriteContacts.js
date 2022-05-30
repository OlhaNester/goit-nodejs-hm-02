const contactsPath = require("./contactPath");
const fs = require("fs/promises");

const rewriteContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
};
module.exports = rewriteContacts;
