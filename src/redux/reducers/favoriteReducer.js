import * as actionTypes from "../actionTypes";
import { initialValues } from "../initialValues/initialValues";

export default function favoriteReducer(state = initialValues, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITES:
      const isFavorite = state.favorites.find(
        (favoriteItem) => favoriteItem.id === action.payload.id
      );
      if (isFavorite) {
        const removeFavoriteItem = state.favorites.filter(
          (favoriteItem) => favoriteItem.id !== action.payload.id
        );
        return {
          ...state,
          favorites: removeFavoriteItem,
        };
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    default:
      return state;
  }
}
