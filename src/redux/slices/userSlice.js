import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    avatar: "",
    currentFilmRating: 0,
    isLoading: true,
    isAuthorizationLoading: false,
  },
  reducers: {
    USER_SUCCESS: (state, action) => {
      state.name = action.payload.userName;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.isLoading = false;
    },
    USER_FAILURE: (state, action) => {
      state.isLoading = false;
    },
    CURRENT_FILM_RATING_SUCCESS: (state, action) => {
      state.currentFilmRating = action.payload.rate;
    },
    CURRENT_FILM_SET_RATING: (state, action) => {
      state.currentFilmRating = action.payload;
    },
    UPDATE_SUCCESS: (state, action) => {
      state.avatar = action.payload.avatar;
    },
    LOADING_TRUE: (state) => {
      state.isAuthorizationLoading = true;
    },
    LOG_IN_SUCCESS: (state) => {
      state.isAuthorizationLoading = false;
    },
    LOG_IN_FAILURE: (state) => {
      state.isAuthorizationLoading = false;
    },
    REGISTRATION_SUCCESS: (state) => {
      state.isAuthorizationLoading = false;
    },
    REGISTRATION_FAILURE: (state) => {
      state.isAuthorizationLoading = false;
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
