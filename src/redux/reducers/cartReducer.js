import * as actionTypes from "../actionTypes";
import { initialValues } from "../initialValues/initialValues";
import { addToCart } from "./cart.util";

export default function cartReducer(state = initialValues, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: addToCart(state.cart, action.payload),
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
          (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
          0
        ),
      };

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}
