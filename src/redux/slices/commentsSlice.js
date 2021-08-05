import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    isLoading: true,
    Loaded: false,
  },
  reducers: {
    COMMENTS_SUCCESS: (state, action) => {
      console.log(action.payload + '!!!!!!!!!!!!!!!!!!!!!!!');
      state.comments = action.payload;
      state.Loaded = true;
      state.isLoading = false;
    },
    COMMENTS_FAILURE: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default commentsSlice.reducer;
