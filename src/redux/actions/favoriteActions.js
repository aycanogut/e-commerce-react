import * as actionTypes from "../actionTypes";

export const toggleFavoriteActions = (product) => {
  return {
    type: actionTypes.TOGGLE_FAVORITES,
    payload: product,
  };
};
