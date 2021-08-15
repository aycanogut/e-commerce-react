import * as actionTypes from "../../redux/actionTypes";
import favoriteReducer from "../../redux/reducers/favoriteReducer";
import { initialValues } from "../../redux/initialValues/initialValues";

describe("favorite reducer", () => {
  it("should return initial state", () => {
    expect(favoriteReducer(undefined, {})).toEqual(initialValues);
  });

  it("should add a product to favorites", () => {
    const state = {
      favorites: [],
    };
    const action = {
      type: actionTypes.ADD_TO_FAVORITES,
      payload: { id: 1, name: "test", price: 250 },
    };

    expect(favoriteReducer(state, action)).toEqual({
      favorites: [{ id: 1, name: "test", price: 250, isFavorite: true }],
    });
  });

  it("should remove a product from favorites", () => {
    const state = {
      favorites: [{ id: 1, name: "test", price: 250 }],
    };
    const action = {
      type: actionTypes.REMOVE_FROM_FAVORITES,
      payload: { id: 1, name: "test", price: 250 },
    };

    expect(favoriteReducer(state, action)).toEqual({
      favorites: [],
    });
  });
});
