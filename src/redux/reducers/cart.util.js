export const addToCart = (cart, item) => {
  const existingCartItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingCartItem) {
    return cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cart, { ...item, quantity: 1 }];
};
