import { Product } from "../types/product";
import { Box } from "@mui/material";
import Image from "next/image";
export const ProductImage = ({
  image,
}: {
  image?: Product["productImage"];
}) => {
  if (image == undefined || image == null) {
    return <div>画像がありません</div>;
  }
  return (
    <Box>
      <Image src={image} alt="product image" width={500} height={600} />
    </Box>
  );
};


