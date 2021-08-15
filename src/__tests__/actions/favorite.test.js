import * as actionTypes from "../../redux/actionTypes";
import {
  addToFavoriteAction,
  removeFromFavoriteAction,
} from "../../redux/actions/favoriteActions";

describe("favorite action", () => {
  it("should add a product to favorites", () => {
    const product = { id: 1, name: "Test product 1", price: 250 };

    const expectedAction = {
      type: actionTypes.ADD_TO_FAVORITES,
      payload: product,
    };

    expect(addToFavoriteAction(product)).toEqual(expectedAction);
    expect(removeFromFavoriteAction(product).payload).toHaveProperty("price");
    expect(removeFromFavoriteAction(product).payload).toMatchObject({
      price: 250,
    });
  });

  it("should remove a product from favorites", () => {
    const product = { id: 1, name: "Test product 1", price: 250 };

    const expectedAction = {
      type: actionTypes.REMOVE_FROM_FAVORITES,
      payload: product,
    };

    expect(removeFromFavoriteAction(product)).toEqual(expectedAction);
    expect(removeFromFavoriteAction(product).payload).toHaveProperty("name");
    expect(removeFromFavoriteAction(product).payload).toMatchObject({
      name: "Test product 1",
    });
  });
});
