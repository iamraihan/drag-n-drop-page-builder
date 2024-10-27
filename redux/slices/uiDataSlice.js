"use client";

import { createSlice } from "@reduxjs/toolkit";
import { blog_01, cta_01, feature_01 } from "./initial-states/initialUiData";

const initialState = {
  blogOne: blog_01,
  ctaOne: cta_01,
  featureOne: feature_01,
  selectedItemStyle: {
    collectionName: "blogOne",
    id: 1,
    fontSize: "text-base",
    color: "text-gray-700",
    itemKey: "title",
  },
};

export const uiDataSlice = createSlice({
  name: "ui-data-slice",
  initialState,
  reducers: {
    setItemStyles(state, action) {
      const { collectionName, id, styles } = action.payload;

      const selectedItem = state[collectionName]?.find(
        (item) => item.id === id
      );

      if (selectedItem) {
        selectedItem.styles = { ...selectedItem.styles, ...styles };
      }
    },

    setSelectedItemStyle(state, action) {
      state.selectedItemStyle = action.payload;
    },
  },
});
export const { setItemStyles, setSelectedItemStyle } = uiDataSlice.actions;
export default uiDataSlice.reducer;
