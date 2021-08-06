import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isLoading: true,
  },
  reducers: {
    USER_BY_ID_SUCCESS: (state, action) => {
      state.users[action.payload.id] = action.payload;
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
