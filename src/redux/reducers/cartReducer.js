import * as actionTypes from "../actionTypes";
import { initialValues } from "../initialValues/initialValues";

export default function cartReducer(state = initialValues, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const existingCartItem = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (existingCartItem) {
        return state.cart.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case actionTypes.REMOVE_FROM_CART:
      const removeCartItem = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      return {
        ...state,
        cart: removeCartItem,
      };

    default:
      return state;
  }
}
