import * as actionTypes from "../actionTypes";

export const getProductsAction = () => {
  return async (dispatch) => {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const data = await response.json();

    dispatch({ type: actionTypes.GET_PRODUCTS, payload: data });
  };
};
