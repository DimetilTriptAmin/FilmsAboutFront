import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    avatar: "",
    currentFilmRating: 0,
    isLoading: false,
  },
  reducers: {
    USER_SUCCESS: (state, action) => {
      state.name = action.payload.userName;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
    },
    USER_FAILURE: (state, action) => {
      state.isLoading = false;
      console.log(state.isLoading, "FAILURE");
    },
    CURRENT_FILM_RATING_SUCCESS: (state, action) => {
      state.currentFilmRating = action.payload.rate;
    },
    CURRENT_FILM_SET_RATING: (state, action) => {
      state.currentFilmRating = action.payload;
    },
    LOADING_TRUE: (state) => {
      state.isLoading = true;
    },
    LOG_IN_SUCCESS: (state) => {
      state.isLoading = false;
    },
    LOG_IN_FAILURE: (state) => {
      state.isLoading = false;
    },
    REGISTRATION_SUCCESS: (state) => {
      state.isLoading = false;
    },
    REGISTRATION_FAILURE: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  USER_SUCCESS,
  USER_FAILURE,
  CURRENT_FILM_RATING_SUCCESS,
  CURRENT_FILM_SET_RATING,
  LOADING_TRUE,
} = userSlice.actions;

export default userSlice.reducer;
