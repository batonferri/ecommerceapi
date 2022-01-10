const {
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
  getUserStats,
} = require("../controllers/user");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);

router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

router.get("/find/:id", verifyTokenAndAdmin, getUserById);

router.get("/", verifyTokenAndAdmin, getAllUsers);

router.get("/stats", verifyTokenAndAdmin, getUserStats);

module.exports = router;
