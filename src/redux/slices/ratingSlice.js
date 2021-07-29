import { createSlice } from "@reduxjs/toolkit";

export const ratingSlice = createSlice({
  name: "rating",
  initialState: {
    rating: [],
    hasErrors: false,
    errorMessage: "",
    isLoading: true,
  },
  reducers: {
    ratingByPairIdFetchedSuccess: (state, action) => {
      state.rating[action.payload.userId] = action.payload.response;
      state.isLoading = false;
    },
  },
});

export const { ratingByPairIdFetchedSuccess } = ratingSlice.actions;
export default ratingSlice.reducer;
