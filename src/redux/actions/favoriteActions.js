import * as actionTypes from "../actionTypes";

export const addToFavoriteAction = (product) => {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    payload: product,
  };
};

export const removeFromFavoriteAction = (product) => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITES,
    payload: product,
  };
};
