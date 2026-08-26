"use client";
import React, { FC, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useProducts } from "@/features/products/hooks/useProducts";
import { extractShopIdAndProductIdFromProductUrl } from "@/features/products/utils/extractShopIdFromProductUrl";
import { ProductBreadcrumbs } from "@/features/products/components/ProductBreadcrumbs";
import Container from "@mui/material/Container";

const product: FC = () => {
  const path = usePathname();
  const ids = extractShopIdAndProductIdFromProductUrl(path);

  const { shopId, productId } = ids;
  const { product, fetchProduct } = useProducts();
  
  useEffect(() => {
    if (ids !== null) {
      fetchProduct(productId);
    }
  }, [productId, fetchProduct, ids]);

  if (ids == null) {
    return <div>ページが見つかりません</div>;
  }
  
  return (
    <Container maxWidth="lg">
      <ProductBreadcrumbs shopName={shopId} />
      {JSON.stringify(product)}
    </Container>
  );
};
export default product;
