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
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      const removeCartItem = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      return {
        ...state,
        cart: removeCartItem,
      };
    case actionTypes.TOTAL_PRICE:
      return {
        ...state,
        totalPrice: state.cart.reduce(
          (acc, cartItem) => acc + cartItem.quantity * cartItem.totalPrice,
          0
        ),
      };
    default:
      return state;
  }
}
