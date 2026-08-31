import { Request, Response } from "express";
import { getProducts, getProduct } from "../../models/products/products";

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await getProducts();
  console.log("console-products", products);
  res.json({ products: products });
};

export const getProductDetail = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const product = await getProduct(productId);
  console.log("console-productDetail", product);
  res.json({ product: product });
};
