const router = require("express").Router();

const { getUserByID, getAllUsers } = require("../controller/fetch.controller");

router.get("/", getUserByID);
router.get("/all", getAllUsers);

module.exports = router;
