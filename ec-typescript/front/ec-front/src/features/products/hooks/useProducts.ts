import { useState } from "react";
import { Product } from "../types/product";
import { getProducts } from "../api/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const res = await getProducts();
    if (res !== undefined) {
      setProducts(res);
    }
    return res;
  };
  return { products, fetchProducts };
};

