import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
    },
    reducers: {
        increment: (state, action) => {
            const post = state.posts.find((post) => post.id === action.payload);
            if (post) {
                post.votes += 1;
            }
        },
        decrement: (state, action) => {
            const post = state.posts.find((post) => post.id === action.payload);
            if (post) {
                post.votes -= 1;
            }
        },
        addPost: (state, action) => {
            state.posts.push({ ...action.payload, votes: 0 });
        },
    },
});

export const { increment, decrement, addPost } = postSlice.actions;
export default postSlice.reducer;
