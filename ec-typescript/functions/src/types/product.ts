import { DocumentReference, DocumentSnapshot } from "firebase-admin/firestore";

export type ProductDocument = DocumentSnapshot;

export type ProductCategory = "tops" | "inners" | "bottoms" | "hoes";

export type Product = {
  productId: number;
  productOwner: DocumentReference;
  productImage: string;
  productName: string;
  productCategory: ProductCategory;
  productPrice: number;
};

export type ProcessedProduct = {
  productId: number;
  shopName: string;
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
};


