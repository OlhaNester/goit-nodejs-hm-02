const { Conflict } = require("Http-errors");
// const bcrypt = require("bcrypt");
const { User } = require("../../models");

const singup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email: ${email} already exist`);
  }
  //   const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  //   const result = await User.create({
  //     email,
  //     password: hashPassword,
  //     subscription,
  //   });
  const newUser = new User({ email, subscription });
  newUser.setPassword(password);
  newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    data: { user: { email, password, subscription } },
  });
};

module.exports = singup;
