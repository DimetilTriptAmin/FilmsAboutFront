import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    avatar: "",
    currentFilmRating: 0,
  },
  reducers: {
    USER_BY_ID_SUCCESS: (state, action) => {
      state.name = action.payload.userName;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
    },
    CURRENT_FILM_RATING_SUCCESS: (state, action) => {
      state.currentFilmRating = action.payload.rate;
    },
    CURRENT_FILM_SET_RATING: (state, action) => {
      state.currentFilmRating = action.payload;
    },
  },
});

export const {
  USER_BY_ID_SUCCESS,
  CURRENT_FILM_RATING_SUCCESS,
  CURRENT_FILM_SET_RATING,
} = userSlice.actions;

export default userSlice.reducer;
