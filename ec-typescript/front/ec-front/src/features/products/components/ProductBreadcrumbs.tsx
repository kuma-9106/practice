import { CommonBreadcrumbs } from "@/components/elements/Breadcrumbs/Breadcrumbs";
import { Shop } from "@/features/shops/types/shops";

export const ProductBreadcrumbs = (shopName: Shop) => {
  const links = [
    { text: "Topページ", href: "/" },
    { text: "shopページ", href: `../../../shop/${shopName.shopName}` },
    { text: "現在のページ", href: "#" },
  ];

  return <CommonBreadcrumbs links={links} />;
};

