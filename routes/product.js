const {
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  uploadProduct,
} = require("../controllers/product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

router.post("/", verifyTokenAndAdmin, uploadProduct);

router.put("/:id", verifyTokenAndAdmin, updateProduct);

router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

router.get("/find/:id", getOneProduct);

router.get("/", getAllProducts);

module.exports = router;
