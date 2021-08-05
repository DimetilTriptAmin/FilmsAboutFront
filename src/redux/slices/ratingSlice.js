import { createSlice } from "@reduxjs/toolkit";

export const ratingSlice = createSlice({
  name: "rating",
  initialState: {
    rating: [],
    hasErrors: false,
    isLoading: true,
  },
  reducers: {
    RATING_BY_PAIR_ID_SUCCESS: (state, action) => {
      console.log(action.payload, "RATING SLICE");
      //state.rating[action.payload.id] = action.payload;
      state.isLoading = false;
    },
  },
});

export default ratingSlice.reducer;
