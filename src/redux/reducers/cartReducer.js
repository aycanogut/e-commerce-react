import * as actionTypes from "../actionTypes";
import { initialValues } from "../initialValues/initialValues";
import { addToCart, removeItemFromCart } from "./cart.util";

export default function cartReducer(state = initialValues, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: addToCart(state.cart, action.payload),
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeItemFromCart(state.cart, action.payload),
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
