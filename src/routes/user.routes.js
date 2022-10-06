const router = require("express").Router();

const {
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");

router.post("/create", createUser);
router.post("/update", updateUser);
router.post("/delete", deleteUser);

module.exports = router;
