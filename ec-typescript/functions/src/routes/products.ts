const express = require("express");
const router = express.Router();
import {
  getAllProducts,
  getProductDetail,
} from "../controllers/products/products";

router.get("/", getAllProducts);
router.get("/:productId", getProductDetail);

export default router;
