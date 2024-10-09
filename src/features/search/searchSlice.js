import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchTerm: '',
    sortBy: 'newest', // Default sort option
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
    },
});

export const { setSearchTerm, setSortBy } = searchSlice.actions;

export const selectSearchTerm = (state) => state.search.searchTerm;
export const selectSortBy = (state) => state.search.sortBy;

export default searchSlice.reducer;
