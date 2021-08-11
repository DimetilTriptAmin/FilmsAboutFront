import { createSlice } from "@reduxjs/toolkit";

export const filmSlice = createSlice({
  name: "film",
  initialState: {
    isLoading: true,
    Loaded: false,
    id: 0,
    title: "",
    poster: "",
    description: "",
    rating: 0,
    trailerLink: "",
  },
  reducers: {
    FILM_SUCCESS: (state, action) => {
      state.isLoading = false;
      state.Loaded = true;
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.poster = action.payload.poster;
      state.description = action.payload.description;
      state.rating = action.payload.rating;
      state.trailerLink = action.payload.trailerLink;
    },
    FILM_FAILURE: (state, action) => {
      state.isLoading = false;
    },
    FILM_DATA_RESET: (state, action) => {
      state.isLoading = true;
      state.Loaded = false;
    },
    SET_FILM_RATING_SUCCESS: (state, action) => {
      state.rating = action.payload;
    },
  },
});

export const { FILM_SUCCESS, FILM_FAILURE, FILM_DATA_RESET } =
  filmSlice.actions;
export default filmSlice.reducer;
