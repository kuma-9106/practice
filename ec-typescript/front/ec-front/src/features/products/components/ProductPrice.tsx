import { Product } from "../types/product";

export const ProductPrice = ({
  productPrice,
}: {
  productPrice: Product["productPrice"];
}) => {
  return <div>{productPrice}円</div>;
};

