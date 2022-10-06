const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const user = await User.find({});
  res.status(200).send(user);
};

const getUserByID = async (req, res) => {
  const mobile = req.query.whtsapp_number ?? "";
  const name = req.query.full_name ?? "";

  if (!mobile && !name) {
    res.status(400).send("Check the params");
  }

  if (mobile) {
    const user = await User.findOne({ whtsapp_number: mobile });

    if (user) return res.status(200).send(user);
    else return res.status(400).send("Could not find user");
  }
  if (name) {
    const user = await User.findOne({ full_name: name });

    if (user) return res.status(200).send(user);
    else return res.status(400).send("Could not find user");
  }
};

module.exports = {
  getUserByID,
  getAllUsers,
};
