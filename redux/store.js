import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "./slices/builderSlice";
import uiDataReducer from "./slices/uiDataSlice";

export const store = configureStore({
  reducer: {
    pageBuilder: builderReducer,
    uiData: uiDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === "development",
});
