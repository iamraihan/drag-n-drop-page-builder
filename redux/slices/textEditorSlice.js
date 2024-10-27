"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedText: {
    fontSize: "text-base",
  },

  updatedAText: {
    collectionName: "blogOne",
    id: 1,
    field: "title",
    value: "Updated Title",
  },
};

export const textEditorSlice = createSlice({
  name: "text-editor-slice",
  initialState,
  reducers: {
    setSelectedText(state, action) {
      state.selectedText = { ...state.selectedText, ...action.payload };
    },
    setUpdateAText: (state, action) => {
      state.updatedAText = action.payload;
    },
  },
});
export const { setSelectedText, setUpdateAText } = textEditorSlice.actions;
export default textEditorSlice.reducer;
