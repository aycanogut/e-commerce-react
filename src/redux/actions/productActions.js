import * as actionTypes from "../actionTypes";
import { db } from "../../firebase/firebase";

export const getProductsAction = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://60f359986d44f3001778892e.mockapi.io/api/products"
    );
    const data = await response.json();
    console.log(data);
    dispatch({ type: actionTypes.GET_PRODUCTS, payload: data });
  };
};
