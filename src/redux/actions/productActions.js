import * as actionTypes from "../actionTypes";

export const getProductsAction = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://60f359986d44f3001778892e.mockapi.io/api/products"
    );
    const data = await response.json();

    dispatch({ type: actionTypes.GET_PRODUCTS, payload: data });
  };
};
