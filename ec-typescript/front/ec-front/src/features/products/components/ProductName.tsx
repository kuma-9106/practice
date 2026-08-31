import { Product } from "../types/product";

export const ProductName = ({
  productName,
}: {
  productName: Product["productName"];
}) => {
  return <div>{productName}</div>;
};

