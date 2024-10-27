import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "./slices/builderSlice";

export const store = configureStore({
  reducer: {
    pageBuilder: builderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === "development",
});
