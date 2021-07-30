import { createSlice } from "@reduxjs/toolkit";

export const filmListSlice = createSlice({
  name: "filmList",
  initialState: {
    films: [],
    isLoading: true,
    Loaded: false,
  },
  reducers: {
    filmListFetchedSuccess: (state, action) => {
      state.films = action.payload;
      state.isLoading = false;
      state.Loaded = true;
    },
    filmListFetchedFail: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { filmListFetchedSuccess, filmListFetchedFail } =
  filmListSlice.actions;
export default filmListSlice.reducer;
