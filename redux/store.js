import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "./slices/builderSlice";
import textEditorReducer from "./slices/textEditorSlice";
import uiDataReducer from "./slices/uiDataSlice";

export const store = configureStore({
  reducer: {
    pageBuilder: builderReducer,
    textEditor: textEditorReducer,
    uiData: uiDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === "development",
});
