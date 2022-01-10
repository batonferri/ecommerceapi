const {
  getAllCarts,
  getUserCart,
  deleteCart,
  editCart,
  createCart,
} = require("../controllers/cart");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

router.post("/", verifyToken, createCart);

router.put("/:id", verifyTokenAndAuthorization, editCart);

router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

router.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);

router.get("/", verifyTokenAndAdmin, getAllCarts);

module.exports = router;
