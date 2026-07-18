const express = require("express");
const router = express.Router();
import { getAllProducts } from "../controllers/products/products";

router.get("/", getAllProducts);

export default router;

