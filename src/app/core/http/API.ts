export const Routes: { [key: string]: any } = {
  allProducts: 'https://dummyjson.com/docs/products',
  singleProduct: (productId: string) =>
    `https://dummyjson.com/docs/products/${productId}`,
};
