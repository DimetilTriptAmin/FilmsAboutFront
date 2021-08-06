import { createSlice } from '@reduxjs/toolkit';

export const commentListSlice = createSlice({
    name: 'commentList',
    initialState: {
        textData: [],
        isLoading: true,
        Loaded: false,
    },
    reducers: {
        COMMENT_LIST_SUCCESS: (state, action) => {
            state.textData = action.payload;
            state.Loaded = true;
            state.isLoading = false;
        },
        COMMENT_LIST_FAILURE: (state, action) => {
            state.isLoading = false;
        },
    },
});

export default commentListSlice.reducer;