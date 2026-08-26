import { useState } from "react";
import { Product } from "../types/product";
import { getProducts, getProduct } from "../api/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const fetchProduct = async (productId: string) => {
    const res = await getProduct(productId);
    console.log("response:" + res);
    if (res !== undefined) {
      setProduct(res);
    }
    return res;
  };
  const fetchProducts = async () => {
    const res = await getProducts();
    if (res !== undefined) {
      setProducts(res);
    }
    return res;
  };
  return { product, products, fetchProduct, fetchProducts };
};

