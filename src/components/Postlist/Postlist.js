import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostWithVotes from '../../features/post/post';
import { addPost } from '../../features/post/postSlice';
import { selectFilteredAndSortedPosts } from '../../features/search/search';

function Postlist() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts);
    const filteredAndSortedPosts = useSelector(selectFilteredAndSortedPosts);

    useEffect(() => {
        // This is just for demonstration. In a real app, you'd fetch posts from an API.
        const initialPosts = [
            { id: 1, title: 'Lolz', content: 'This is the first post content', author: 'Abruzzi', date: '2023-06-01' },
            { id: 2, title: 'Second Post', content: 'This is the second post content', author: 'Jane Smith', date: '2023-06-02' },
            { id: 3, title: 'Second Post', content: 'This is the second post content', author: 'Jane Smith', date: '2023-06-02' },
            { id: 4, title: 'I finished the Armory passes and it turns out you can buy even more in the same account after you finished them', content: 'This is the second post content', author: 'Jane Smith', date: '2023-06-02' },
            { id: 5, title: 'Second Post', content: 'This is the second post content', author: 'Jane Smith', date: '2023-06-02' },
            { id: 6, title: 'Second Post', content: 'This is the second post content', author: 'Jane Smith', date: '2023-06-02' },
        ];

        initialPosts.forEach((post) => dispatch(addPost(post)));
    }, [dispatch]);

    return (
        <div className="postlist">
            {filteredAndSortedPosts.map((post) => (
                <PostWithVotes
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    date={post.date}
                />
            ))}
        </div>
    );
}

export default Postlist;
