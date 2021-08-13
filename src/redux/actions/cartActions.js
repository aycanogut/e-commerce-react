import * as actionTypes from "../actionTypes";

export const addToCartAction = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCartAction = (product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};

export const totalPriceAction = () => {
  return {
    type: actionTypes.TOTAL_PRICE,
  };
};

export const clearCartAction = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};
