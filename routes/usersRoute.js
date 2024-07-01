const { getAllUsers, registerUser, loginUser } = require("../controllers/usersController");

const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
