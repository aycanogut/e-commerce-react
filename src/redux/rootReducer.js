import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import favoriteReducer from "./reducers/favoriteReducer";
import authReducer from "./reducers/authReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import productReducer from "./reducers/productReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoriteReducer,
  auth: authReducer,
  product: productReducer,
});

export default persistReducer(persistConfig, rootReducer);
