const express = require("express");
const { Router } = require("express");
const userController = require("../controller/userController");
const router = express.Router();

//get User By ID
router.get("/:id", userController, getUserByID);
//delete user by id
router.delete("/:id", userController, deleteUser);
//edit user
router.patch("/:id", userController, updateInfo);
//register
router.post("/register", userController, register);
//login
router.post("/login", userController, login);
//get all users
router.get("/", userController, getAllUsers);

module.exports = router;
