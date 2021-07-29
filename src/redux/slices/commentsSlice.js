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
  },
});

export const { commentsFetchedSuccess } = commentsSlice.actions;
export default commentsSlice.reducer;
