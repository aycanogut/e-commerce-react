import * as actionTypes from "../actionTypes";
import { initialValues } from "../initialValues/initialValues";

export default function productReducer(state = initialValues, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
