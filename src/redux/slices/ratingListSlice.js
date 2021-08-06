import { createSlice } from "@reduxjs/toolkit";

export const ratingListSlice = createSlice({
  name: "ratingList",
  initialState: {
    values: [],
    hasErrors: false,
    isLoading: true,
  },
  reducers: {
    RATING_BY_PAIR_ID_SUCCESS: (state, action) => {
      state.values[action.payload.userId] = action.payload.rate;
      state.isLoading = false;
    },
  },
});

export default ratingListSlice.reducer;
