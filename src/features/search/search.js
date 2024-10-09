import { selectSearchTerm, selectSortBy } from './searchSlice';

export const selectFilteredAndSortedPosts = (state) => {
    const searchTerm = selectSearchTerm(state).toLowerCase();
    const sortBy = selectSortBy(state);

    let filteredPosts = state.post.posts.filter((post) => post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm));

    switch (sortBy) {
        case 'newest':
            return filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'oldest':
            return filteredPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'mostVotes':
            return filteredPosts.sort((a, b) => b.votes - a.votes);
        case 'leastVotes':
            return filteredPosts.sort((a, b) => a.votes - b.votes);
        default:
            return filteredPosts;
    }
};
