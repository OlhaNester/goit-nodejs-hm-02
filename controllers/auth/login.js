const { Unauthorized } = require("Http-errors");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password, subscription } = req.body;

  const user = await User.findOne({ email });
  if (!user || !user.verify || !user.comparePassword(password)) {
    throw new Unauthorized("Email or password is wrong");
  }
  // const passCompare = bcrypt.compareSync(password, this.password);
  // (if !user || !passCompare) {
  //   throw new Unauthorized("Email or password is wrong");
  // }

  const payload = { id: user._id };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    status: "success",
    code: 200,
    data: { token, user: { email, subscription } },
  });
};

module.exports = login;
