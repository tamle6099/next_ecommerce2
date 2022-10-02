export const ACTIONS = {
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
};

export const addToCart = (product, cart) => {
  if (product.inStock === 0)
    return { type: "NOTIFY", payload: { err: "This product is uot of stock" } };
  const check = cart.every((item) => {
    return item._id !== product._id;
  });
  if (!check)
    return {
      type: "NOTIFY",
      payload: { err: "The product has been added to cart." },
    };
  return { type: "ADD_CART", payload: [...cart, { ...product, quantily: 1 }] };
};
