"use client";
import React, { FC, useEffect } from "react";

import { ProductCards } from "@/features/products/components/Products";
import { useProducts } from "@/features/products/hooks/useProducts";

const Home: FC = () => {
  const { products, fetchProducts } = useProducts();
  useEffect(() => {
    (async () => {
      const res = await fetchProducts();
      console.log(res);
    })();
  }, []);
  return (
    <main className="h-screen p-6">
      <div>ここに本文が入ります</div>
      <ProductCards products={products} />
    </main>
  );
};

export default Home;

