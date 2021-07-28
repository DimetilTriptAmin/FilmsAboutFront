import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    hasErrors: false,
    isLoading: true,
  },
  reducers: {
    commentsFetchedSuccess: (state, action) => {
      state.comments = action.payload;
    },
    commentsFetchedFail: (state, action) => {
      state.hasErrors = true;
      state.errorMessage = action.payload.message;
    },
  },
});

export const { commentsFetchedSuccess, commentsFetchedFail } =
  commentsSlice.actions;
export default commentsSlice.reducer;
