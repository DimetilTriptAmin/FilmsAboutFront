import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: '',
    email: '',
    avatar: '',
    currentFilmRating: 0,
  },
  reducers: {
    USER_BY_ID_SUCCESS: (state, action) => {
      state.name = action.payload.userName;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
    },
    USER_RATING_SUCCESS: (state, action) => {
      state.currentFilmRating = action.payload;
    }
  },
});

export default userSlice.reducer;
