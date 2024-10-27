"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  canvasItems: [],
};

export const builderSlice = createSlice({
  name: "builder-slice",
  initialState,
  reducers: {
    setCanvasItems: (state, action) => {
      state.canvasItems = [...state.canvasItems, action.payload];
    },
  },
});
export const { setCanvasItems } = builderSlice.actions;
export default builderSlice.reducer;
