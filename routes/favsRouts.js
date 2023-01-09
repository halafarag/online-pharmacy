const express = require("express");
const router = express.Router();
const { isUser } = require("../middlewares/auth");
const favController = require("../controller/favsConteoller");
// add fav
router.post("/", isUser, favController.addFav);
// remove fav
router.delete("/:id", isUser, favController.deleteFav);
//get all
router.get("/", isUser, favController.getAllFav);
module.exports = router;
