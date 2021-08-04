import * as actionTypes from "../actionTypes";
import { db } from "../../firebase/firebase";

export const getProductsAction = () => {
  return async (dispatch) => {
    const response = await db.collection("products").get();
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch({ type: actionTypes.GET_PRODUCTS, payload: data });
  };
};

export const getProductDetailAction = (id) => {
  return async (dispatch) => {
    const response = await db.collection("products").doc(id).get();
    const data = response.data();
    dispatch({ type: actionTypes.GET_PRODUCT_DETAIL, payload: data });
  };
};
