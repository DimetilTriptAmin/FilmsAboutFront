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
    ratingByPairIdFetchedFail: (state, action) => {
      state.hasErrors = true;
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    },
  },
});

export const { ratingByPairIdFetchedSuccess, ratingByPairIdFetchedFail } =
  ratingSlice.actions;
export default ratingSlice.reducer;
