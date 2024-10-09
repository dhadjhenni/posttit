import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/post/postSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
    reducer: {
        post: postReducer,
        search: searchReducer,
    },
});
