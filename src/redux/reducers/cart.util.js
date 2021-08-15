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

export const removeItemFromCart = (cart, cartItemToRemove) => {
  const existingCartItem = cart.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cart.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cart.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
