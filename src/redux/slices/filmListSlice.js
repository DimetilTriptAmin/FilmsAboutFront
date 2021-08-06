import { createSlice } from "@reduxjs/toolkit";

export const filmListSlice = createSlice({
  name: "filmList",
  initialState: {
    films: [],
    isLoading: true,
    Loaded: false,
  },
  reducers: {
    FILM_LIST_SUCCESS: (state, action) => {
      state.films = action.payload;
      state.isLoading = false;
      state.Loaded = true;
    },
    FILM_LIST_FAILURE: (state) => {
      state.isLoading = false;
    },
  },
});

export default filmListSlice.reducer;
