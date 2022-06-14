const { Unauthorized } = require("Http-errors");
const { User } = require("../../models");
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.comparePassword(password)) {
    throw new Unauthorized("Email or password is wrong");
  }
};

module.exports = login;
