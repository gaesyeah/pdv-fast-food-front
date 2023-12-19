export const convertPrice = (price: number) => {
  return `R$${price.toFixed(2).toString().replace(".", ",")}`;
};
