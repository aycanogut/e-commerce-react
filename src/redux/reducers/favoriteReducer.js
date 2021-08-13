import * as actionTypes from "../actionTypes";
import { initialValues } from "../initialValues/initialValues";

export default function favoriteReducer(state = initialValues, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVORITES:
      action.payload.isFavorite = true;
      return {
        ...state,
        favorites: [...state.favorites, { ...action.payload }],
      };
    case actionTypes.REMOVE_FROM_FAVORITES:
      action.payload.isFavorite = false;
      const removeFavoriteItem = state.favorites.filter(
        (favoriteItem) => favoriteItem.id !== action.payload.id
      );
      return {
        ...state,
        favorites: removeFavoriteItem,
      };
    default:
      return state;
  }
}
