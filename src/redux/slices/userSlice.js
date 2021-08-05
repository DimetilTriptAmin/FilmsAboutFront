import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isLoading: true,
  },
  reducers: {
    userFetchedSuccess: (state, action) => {
      console.log(action.type);
      state.users[action.payload.userId] = action.payload.response;
      state.isLoading = false;
    },
  },
});

export const { userFetchedSuccess } = userSlice.actions;
export default userSlice.reducer;
