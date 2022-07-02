const { BadRequest } = require("Http-errors");
const { User } = require("../../models");
const sendEmail = require("../../helpers");

const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!email) {
    throw BadRequest("missing required field email");
  }
  if (user.verify) {
    throw BadRequest("Verification has already been passed");
  }
  const confirMail = {
    to: email,
    subject: "Подтверждение email",
    html: `<a target = "_blank" href = "http://localhost:3000/api/users/verify/${user.verificationToken}">Подтвердить email</a>`,
  };
  await sendEmail(confirMail);
  res.json({
    message: "Verification email sent",
  });
};
module.exports = resendEmail;
