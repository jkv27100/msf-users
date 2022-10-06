const User = require("../models/User");

const createUser = async (req, res) => {
  const userDetails = req.body;

  const isExisting = await User.findOne({
    whtsapp_number: userDetails.whtsapp_number,
  }).select({
    whtsapp_number: 1,
  });

  if (isExisting) return res.status(400).send("user already exists");

  const newUser = await User.create({ ...userDetails });

  if (newUser) return res.status(200).send("User Created successfully");
  else res.status(400).send("Error creating User...");
};

const updateUser = async (req, res) => {
  const user_id = req.body.whtsapp_number;
  const userDetails = req.body;

  const isExisting = await User.findOne({
    whtsapp_number: user_id,
  }).select({
    whtsapp_number: 1,
  });

  if (isExisting) {
    try {
      const result = await User.updateOne(
        { whtsapp_number: user_id },
        { ...userDetails }
      );

      res.status(200).send("user updated successfully");
    } catch (error) {
      res.status(400).send("Could not update user");
    }
  } else res.status(404).send("Could not find user");
};

const deleteUser = async (req, res) => {
  const user_id = req.body.whtsapp_number;

  const isExisting = await User.findOne({
    whtsapp_number: user_id,
  }).select({
    whtsapp_number: 1,
  });

  if (isExisting) {
    try {
      const result = await User.deleteOne({ whtsapp_number: user_id });
      res
        .status(200)
        .send(`user with whatsapp number ${user_id} has been deleted`);
    } catch (error) {
      res.status(400).send("Could not delete user");
    }
  } else res.status(404).send("Could not find user");
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
};
