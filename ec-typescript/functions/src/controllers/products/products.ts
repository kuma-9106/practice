import { Request, Response } from "express";
import { getProducts } from "../../models/products/products";

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await getProducts();
  res.json({ products: products });
};
