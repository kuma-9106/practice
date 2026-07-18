import initializeFirebaseServer from "../../initFirebase";
import { Product, ProductDocument } from "../../types/product";

export const getProducts = async () => {
  let allProducts: Product[] = [];
  const { db } = initializeFirebaseServer();
  const allProductsRef = db.collection("products").get();
  if (!allProductsRef) {
    return "コレクションが見つかりません";
  }
  (await allProductsRef).forEach((doc: ProductDocument) => {
    const docData = doc.data() as Product;
    allProducts.push({
      productCategory: docData.productCategory,
      productImage: docData.productImage,
      productName: docData.productName,
      productPrice: docData.productPrice,
    });
  });
  return allProducts;
};


