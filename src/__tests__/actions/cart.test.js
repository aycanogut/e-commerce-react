import * as actionTypes from "../../redux/actionTypes";
import {
  addToCartAction,
  removeFromCartAction,
  totalPriceAction,
  clearCartAction,
} from "../../redux/actions/cartActions";

describe("cart actions", () => {
  it("should add a product to cart", () => {
    const product = { id: 1, name: "Test product", price: 250 };

    const expectedAction = {
      type: actionTypes.ADD_TO_CART,
      payload: product,
    };

    expect(addToCartAction(product)).toEqual(expectedAction);
    expect(addToCartAction(product).payload).toHaveProperty("price");
    expect(addToCartAction(product).payload).toMatchObject({
      price: 250,
    });
  });

  it("should remove a product from cart", () => {
    const product = { id: 1, name: "Test product", price: 250 };

    const expectedAction = {
      type: actionTypes.REMOVE_FROM_CART,
      payload: product,
    };

    expect(removeFromCartAction(product)).toEqual(expectedAction);
  });

  it("should calculate total price of cart", () => {
    const expectedAction = {
      type: actionTypes.TOTAL_PRICE,
    };

    expect(totalPriceAction()).toEqual(expectedAction);
  });

  it("should clear the cart", () => {
    const expectedAction = {
      type: actionTypes.CLEAR_CART,
    };

    expect(clearCartAction()).toEqual(expectedAction);
  });
});
