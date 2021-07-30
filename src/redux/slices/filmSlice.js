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
    filmFetchedSuccess: (state, action) => {
      state.isLoading = false;
      state.Loaded = true;
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.poster = action.payload.poster;
      state.description = action.payload.description;
      state.rating = action.payload.rating;
      state.trailerLink = action.payload.trailerLink;
    },
    filmFetchedFail: (state, action) => {
      state.isLoading = false;
    },
    filmResetData: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const { filmFetchedSuccess, filmFetchedFail, filmResetData } =
  filmSlice.actions;
export default filmSlice.reducer;
