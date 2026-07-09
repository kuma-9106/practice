export type ProductCategory = "tops" | "inners" | "bottoms" | "hoes";

export type Product = {
  productImage: string;
  productName: string;
  productCategory: ProductCategory;
  productPrice: number;
};

export type ProductObject = {
  product: Product;
};

export type Products = {
  products: Product[]
}
