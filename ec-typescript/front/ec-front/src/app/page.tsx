"use client";
import React, { FC } from "react";

import { ProductCards } from "@/features/products/components/Products";
import { productData } from "@/features/products/dataSet/product";

const Home: FC = () => {
  return (
    <main className="h-screen p-6">
      <div>ここに本文が入ります</div>
      <ProductCards products={productData} />
    </main>
  );
};

export default Home;

