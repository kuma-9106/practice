import initializeFirebaseServer from "../../initFirebase";
import { Product, ProcessedProduct } from "../../types/product";

export const getProducts = async () => {
  let allProducts: ProcessedProduct[] = [];
  const { db } = initializeFirebaseServer();
  const allProductsRef = await db.collection("products").get();
  if (!allProductsRef) {
    return "コレクションが見つかりません";
  }
  for (const doc of allProductsRef.docs) {
    const docData = doc.data() as Product;
    const shopReference = await docData.productOwner.get();
    const shopData = shopReference.data();
    const shopName = shopData?.shopName;
    allProducts.push({
      productId: Number(doc.id),
      shopName: shopName,
      productCategory: docData.productCategory,
      productImage: docData.productImage,
      productName: docData.productName,
      productPrice: docData.productPrice,
    });
  }
  return allProducts;
};