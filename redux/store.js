import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/dummyCounter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
