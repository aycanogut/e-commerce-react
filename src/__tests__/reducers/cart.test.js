import * as actionTypes from "../../redux/actionTypes";
import cartReducer from "../../redux/reducers/cartReducer";
import { initialValues } from "../../redux/initialValues/initialValues";

describe("cart reducer", () => {
  it("should return initial state", () => {
    expect(cartReducer(undefined, {})).toEqual(initialValues);
  });

  it("should clear the cart", () => {
    const state = {
      cart: [
        { id: 1, name: "Test product 1" },
        { id: 2, name: "Test product 2" },
      ],
    };
    const action = {
      type: actionTypes.CLEAR_CART,
    };

    expect(cartReducer(state, action)).toEqual({
      cart: [],
    });
    expect(cartReducer(state, action).cart).toHaveLength(0);
  });

  it("should add product to cart", () => {
    const state = {
      cart: [],
    };
    const action = {
      type: actionTypes.ADD_TO_CART,
      payload: { id: 1, name: "Test product 1" },
    };
    expect(cartReducer(state, action)).toEqual({
      cart: [{ id: 1, name: "Test product 1", quantity: 1 }],
    });
    expect(cartReducer(state, action).cart).toHaveLength(1);
  });

  it("should increase the product quantity", () => {
    const state = {
      cart: [{ id: 1, name: "Test product 1", quantity: 1 }],
    };
    const action = {
      type: actionTypes.ADD_TO_CART,
      payload: { id: 1, name: "Test product 1" },
    };

    expect(cartReducer(state, action)).toEqual({
      cart: [{ id: 1, name: "Test product 1", quantity: 2 }],
    });
    expect(cartReducer(state, action).cart).toHaveLength(1);
  });

  it("should remove product from cart", () => {
    const state = {
      cart: [
        { id: 1, name: "Test product 1", quantity: 1 },
        { id: 2, name: "Test product 2", quantity: 2 },
      ],
    };
    const action = {
      type: actionTypes.REMOVE_FROM_CART,
      payload: { id: 1, name: "Test product 1" },
    };

    expect(cartReducer(state, action)).toEqual({
      cart: [{ id: 2, name: "Test product 2", quantity: 2 }],
    });
    expect(cartReducer(state, action).cart).toHaveLength(1);
  });

  it("should decrease the product quantity", () => {
    const state = {
      cart: [
        { id: 1, name: "Test product 1", quantity: 1 },
        { id: 2, name: "Test product 2", quantity: 3 },
      ],
    };
    const action = {
      type: actionTypes.REMOVE_FROM_CART,
      payload: { id: 2, name: "Test product 2" },
    };
    expect(cartReducer(state, action)).toEqual({
      cart: [
        { id: 1, name: "Test product 1", quantity: 1 },
        { id: 2, name: "Test product 2", quantity: 2 },
      ],
    });
    expect(cartReducer(state, action).cart).toHaveLength(2);
  });

  it("should return total price of cart", () => {
    const state = {
      totalPrice: null,
      cart: [
        { id: 1, name: "Test product 1", quantity: 1, price: 300 },
        { id: 2, name: "Test product 2", quantity: 2, price: 75 },
      ],
    };
    const action = {
      type: actionTypes.TOTAL_PRICE,
    };

    expect(cartReducer(state, action)).toEqual({
      totalPrice: 450,
      cart: [
        { id: 1, name: "Test product 1", quantity: 1, price: 300 },
        { id: 2, name: "Test product 2", quantity: 2, price: 75 },
      ],
    });
  });
});
