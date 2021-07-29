import { createSlice } from "@reduxjs/toolkit";

export const filmListSlice = createSlice({
  name: "filmList",
  initialState: {
    films: [],
  },
  reducers: {
    filmListFetchedSuccess: (state, action) => {
      state.films = action.payload;
    },
    filmListFetchedFail: (state, action) => {
      state.hasErrors = true;
      state.errorMessage = action.payload.message;
    },
  },
});

export const { filmListFetchedSuccess, filmListFetchedFail } = filmListSlice.actions;
export default filmListSlice.reducer;