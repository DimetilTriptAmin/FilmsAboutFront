import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    data: {},
  },
  reducers: {
    enqueueSnackbarInfo: (state, action) => {
      state.data = {
        key: action.payload.key,
        message: action.payload.message,
        options: {
          variant: "info",
        },
      };
    },
    enqueueSnackbarSuccess: (state, action) => {
      state.data = {
        key: action.payload.key,
        message: action.payload.message,
        options: {
          variant: "success",
        },
      };
    },
    enqueueSnackbarError: (state, action) => {
      state.data = {
        key: action.payload.key,
        message: action.payload.message,
        options: {
          variant: "error",
        },
      };
    },
    removeSnackbar: (state, action) => {
      state.data = {};
    },
  },
});

export const {
  enqueueSnackbarInfo,
  removeSnackbar,
  enqueueSnackbarError,
  enqueueSnackbarSuccess,
} = notificationSlice.actions;
export default notificationSlice.reducer;
