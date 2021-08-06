import { createSlice } from "@reduxjs/toolkit";

export const userListSlice = createSlice({
  name: "userList",
  initialState: {
    values: [],
    isLoading: true,
  },
  reducers: {
    USER_BY_ID_SUCCESS: (state, action) => {
      console.log(action.payload + "AASASAS");
      state.values[action.payload.id] = action.payload;
      state.isLoading = false;
    },
  },
});

export default userListSlice.reducer;
