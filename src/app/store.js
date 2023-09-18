import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/users/authSlice";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "assignment-4-redux",
  storage,
  timeout: null,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistedStore = persistStore(store);
