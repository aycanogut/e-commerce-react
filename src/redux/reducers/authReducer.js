import * as actionTypes from "../actionTypes";
import { initialValues } from "../initialValues/initialValues";

export default function authReducer(state = initialValues, action) {
  switch (action.type) {
    case actionTypes.CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
