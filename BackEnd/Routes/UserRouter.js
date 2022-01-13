const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/getbyid/:id", userController.getUserById)
router.get("/get/:email/:password", userController.login);
router.post("/adduser", userController.register);
router.patch("/update", userController.updateUser)

module.exports = router;