import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import favoriteReducer from "./reducers/favoriteReducer";
import authReducer from "./reducers/authReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import productReducer from "./reducers/productReducer";

const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
};

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: persistReducer(favoritesPersistConfig, favoriteReducer),
  auth: authReducer,
  product: productReducer,
});

export default persistReducer(persistConfig, rootReducer);
