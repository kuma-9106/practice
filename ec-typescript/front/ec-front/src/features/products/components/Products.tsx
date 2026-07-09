import React from "react";
import Stack from "@mui/material/Stack";
import { ProductCard } from "@/features/products/components/Product";
import { Products } from "@/features/products/types/product";

export const ProductCards = ({ products }: Products) => {
  return (
    <Stack direction="row" spacing={3}>
      {products?.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
        />
      ))}
    </Stack>
  );
};
