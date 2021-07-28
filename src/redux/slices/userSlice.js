import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isLoading: true,
  },
  reducers: {
    userFetchedSuccess: (state, action) => {
      state.users[action.payload.userId] = action.payload.response;
      state.isLoading = false;
    },
    userFetchedFail: (state, action) => {
      state.hasErrors = true;
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    },
  },
});

export const { userFetchedSuccess, userFetchedFail } = userSlice.actions;
export default userSlice.reducer;
