import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    isLoading: true,
    Loaded: false,
  },
  reducers: {
    commentsFetchedSuccess: (state, action) => {
      state.comments = action.payload;
      state.Loaded = true;
      state.isLoading = false;
    },
    commentsFetchedFail: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { commentsFetchedSuccess, commentsFetchedFail } =
  commentsSlice.actions;
export default commentsSlice.reducer;
