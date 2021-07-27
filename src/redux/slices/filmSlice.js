import { createSlice } from '@reduxjs/toolkit';

export const filmSlice = createSlice({
    name: 'film',
    initialState: {
        id: 0,
        title: '',
        poster: '',
        description: '',
        rating: 0,
        trailerLink: '',
    },
    reducers: {
        filmFetched: (state, action) => {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.poster = action.payload.poster;
            state.description = action.payload.description;
            state.rating = action.payload.rating;
            state.trailerLink = action.payload.trailerLink;
        },
    },
});

export const { filmFetched } = filmSlice.actions;
export default filmSlice.reducer;