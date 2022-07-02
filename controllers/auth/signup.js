const { Conflict } = require("Http-errors");
const { User } = require("../../models");
const gravatar = require("gravatar");
const { v4 } = require("uuid");
const { sendEmail } = require("../../helpers");

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email: ${email} already exist`);
  }

  const avatarURL = gravatar.url(email);
  const verificationToken = v4();
  const newUser = new User({
    email,
    subscription,
    avatarURL,
    verificationToken,
  });
  newUser.setPassword(password);
  await newUser.save();

  const confirMail = {
    to: email,
    subject: "Подтверждение email",
    html: `<a target = "_blank" href = "http://localhost:3000/api/users/verify/${verificationToken}">Подтвердить email</a>`,
  };

  await sendEmail(confirMail);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: { email, password, subscription, avatarURL, verificationToken },
    },
  });
};

module.exports = signup;
