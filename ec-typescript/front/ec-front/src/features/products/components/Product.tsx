"use client";
import React from "react";
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@mui/material";
import { ProductObject } from "@/features/products/types/product";

export const ProductCard = ({ product }: ProductObject) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link
          href={`/shop/${product.shopName}/product/${product.productId}`}
          underline="none"
        >
          <CardMedia
            component="img"
            height="140"
            image={product.productImage}
            alt="product"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" align="left">
              名前:{product.productName}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              カテゴリ:{product.productCategory}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              価格:{product.productPrice}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

