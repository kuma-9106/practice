import { Shop } from "../types/shops";

export const ShopName = ({ shopName }: { shopName: Shop["shopName"] }) => {
  return <div>{shopName}</div>;
};
