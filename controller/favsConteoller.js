const Favourite = require("../models/favourit");

// add FAV
async function addFav(req, res) {
  try {
    const found = await Favourite.findOne({ userId: req.userdata.userId, productId: req.body.productId });
    if (found) {
      res.status(405).json({ error: "this item already in favorites." });
    } else {
      req.body.userId = req.userdata.userId;
      const newFav = await Favourite.create(req.body);
      res.status(201).json(newFav);
    }
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
}

// delete by id
async function deleteFav(req, res) {
  try {
    const favId = req.params.id;
    const found = await Favourite.findById(favId);
    if (found.userId == req.userData.userId) {
      const deleteFav = await Favourite.findByIdAndDelete(favId);
      res.status(200).json({ message: "your Favourite has been deleted" });
    } else {
      res.status(422).json({ message: "this Favourite not belong to you" });
    }
  } catch (err) {
    res.status(422).json(err);
  }
}

//get all favs for one user
async function getAllFav(req, res) {
  try {
    const allFAV = await Favourite.find({ userId: req.userdata.userId }).populate(
      "productId userId",
      "name title price volume img category subcategory , userName "
    );

    const finalResult = allFAV.map((item) => {
      item = item.toObject();
      return {
        _id: item._id,
        userId: item.userId,
        productId: {
          _id: item.productId._id,
          ...item.productId,
          price: item.productId.price,
          img: item.productId.img,
        },
      };
    });

    res.status(200).json(finalResult);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
module.exports = { addFav, deleteFav, getAllFav };
