const {
  createNewOrder,
  updatedOrder,
  deleteOrder,
  getOrdersByUserId,
  getAllOrders,
  getIncome,
} = require("../controllers/order");
const Order = require("../models/Order");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

router.post("/", verifyToken, createNewOrder);

router.put("/:id", verifyTokenAndAdmin, updatedOrder);

router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

router.get("/find/:userId", verifyTokenAndAuthorization, getOrdersByUserId);

router.get("/", verifyTokenAndAdmin, getAllOrders);

router.get("/income", verifyTokenAndAdmin, getIncome);

module.exports = router;
