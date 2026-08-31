export const extractShopIdFromProductUrl = (url: string): string | null => {
  const regex = /shop\/([^/]+)/;
  const match = url.match(regex);
  if (match && match.length >= 2) {
    const encodedShopId = match[1];
    const decodedShopId = decodeURIComponent(encodedShopId);
    return decodedShopId;
  }
  return null;
};

export const extractShopIdAndProductIdFromProductUrl = (
  url: string
): { shopId: string; productId: string } | null => {
  const regex = /shop\/([^/]+)\/product\/([^/]+)/;
  const match = url.match(regex);
  if (match && match.length >= 3) {
    const encodedShopId = match[1];
    const encodedProductId = match[2];
    const decodedShopId = decodeURIComponent(encodedShopId);
    const decodedProductId = decodeURIComponent(encodedProductId);
    return { shopId: decodedShopId, productId: decodedProductId };
  }
  return null;
};
