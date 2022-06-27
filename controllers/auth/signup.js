const { Conflict } = require("Http-errors");
const { User } = require("../../models");
const gravatar = require("gravatar");

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  console.log(req.body);

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
  const avatarURL = gravatar.url(email);
  const newUser = new User({ email, subscription, avatarURL });
  newUser.setPassword(password);
  newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    data: { user: { email, password, subscription, avatarURL } },
  });
};

module.exports = signup;
