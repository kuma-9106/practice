"use client";
import React, { FC, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useProducts } from "@/features/products/hooks/useProducts";
import { extractShopIdAndProductIdFromProductUrl } from "@/features/products/utils/extractShopIdFromProductUrl";
import { ProductBreadcrumbs } from "@/features/products/components/ProductBreadcrumbs";
import { ProductImage } from "@/features/products/components/ProductImage";
import { ShopName } from "@/features/shops/components/ShopName";
import { ProductName } from "@/features/products/components/ProductName";
import { ProductPrice } from "@/features/products/components/ProductPrice";
import { Container, Stack, Box } from "@mui/material";

const product: FC = () => {
  const path = usePathname();
  const ids = extractShopIdAndProductIdFromProductUrl(path);
  if (ids == null) {
    return <div>ページが見つかりません</div>;
  }

  const { shopId, productId } = ids;
  const { product, fetchProduct } = useProducts();
  
  useEffect(() => {
    if (ids !== null) {
      fetchProduct(productId);
    }
  }, [productId, fetchProduct, ids]);

  if (product == null) {
    return <div>商品が見つかりません</div>;
  }
  
  return (
    <Container maxWidth="lg">
      <ProductBreadcrumbs shopName={shopId} />
      <Stack direction="row" spacing={2}>
        <Box>
          <ProductImage image={product.productImage} />
        </Box>
        <Box>
          <ShopName shopName={shopId} />
          <ProductName productName={product.productName} />
          <ProductPrice productPrice={product.productPrice} />
        </Box>
      </Stack>
    </Container>
  );
};
export default product;
