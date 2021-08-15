import * as actionTypes from "../../redux/actionTypes";
import productReducer from "../../redux/reducers/productReducer";
import { initialValues } from "../../redux/initialValues/initialValues";

describe("product reducer", () => {
  it("should return initial state", () => {
    expect(productReducer(undefined, {})).toEqual(initialValues);
  });

  it("should return products", () => {
    const state = {
      products: [],
    };
    const action = {
      type: actionTypes.GET_PRODUCTS,
      payload: [
        { id: 1, name: "Test product 1" },
        { id: 2, name: "Test product 2" },
      ],
    };

    expect(productReducer(state, action)).toEqual({
      products: [
        { id: 1, name: "Test product 1" },
        { id: 2, name: "Test product 2" },
      ],
    });
    expect(productReducer(state, action).products).toHaveLength(2);
  });
});
