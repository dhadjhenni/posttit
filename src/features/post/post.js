import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './postSlice';
import Post from '../../components/Post/Post';

function PostWithVotes({ id, title, content, author, date, currentUserId }) {
    const post = useSelector((state) => state.post.posts.find((post) => post.id === id));
    const dispatch = useDispatch();

    const onIncrementButtonClicked = () => {
        dispatch(increment({ postId: post.id, userId: currentUserId }));
    };

    const onDecrementButtonClicked = () => {
        dispatch(decrement({ postId: post.id, userId: currentUserId }));
    };

    return (
        <Post
            title={title}
            content={content}
            author={author}
            date={date}>
            <div className="post-vote">
                <button onClick={onIncrementButtonClicked}>Up</button>
                <span>{post ? post.votes : 0}</span>
                <button onClick={onDecrementButtonClicked}>Down</button>
            </div>
        </Post>
    );
}

export default PostWithVotes;
