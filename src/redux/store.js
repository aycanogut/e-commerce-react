import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";

const middlewares = [thunk];

export const configureStore = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(configureStore);
