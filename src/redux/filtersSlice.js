import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    text: "",
  },

  reducers: {
    changeFilter(state, action) {
      state.text = action.payload; 
    },
  },
});

export const { changeFilter } = slice.actions;
export const filterReducer = slice.reducer;
