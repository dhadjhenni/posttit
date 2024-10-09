import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        userVotes: {}, // Add this to track user votes
    },
    reducers: {
        increment: (state, action) => {
            const { postId, userId } = action.payload;
            const post = state.posts.find((post) => post.id === postId);
            if (post) {
                const currentVote = state.userVotes[userId]?.[postId] || 0;
                if (currentVote <= 0) {
                    post.votes += 1;
                    state.userVotes[userId] = { ...state.userVotes[userId], [postId]: currentVote + 1 };
                }
            }
        },
        decrement: (state, action) => {
            const { postId, userId } = action.payload;
            const post = state.posts.find((post) => post.id === postId);
            if (post) {
                const currentVote = state.userVotes[userId]?.[postId] || 0;
                if (currentVote >= 0) {
                    post.votes -= 1;
                    state.userVotes[userId] = { ...state.userVotes[userId], [postId]: currentVote - 1 };
                }
            }
        },
        addPost: (state, action) => {
            state.posts.push({ ...action.payload, votes: 0 });
        },
    },
});

export const { increment, decrement, addPost } = postSlice.actions;
export default postSlice.reducer;
