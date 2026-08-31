import { Shop } from "@/features/shops/types/shops";
export type ProductCategory = "tops" | "inners" | "bottoms" | "hoes";

export type Product = {
  productId: number;
  shopName: Shop["shopName"];
  productImage: string;
  productName: string;
  productCategory: ProductCategory;
  productPrice: number;
};

export type ProductObject = {
  product: Product;
};

export type Products = {
  products: Product[];
}
