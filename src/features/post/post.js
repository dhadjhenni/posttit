import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './postSlice';
import Post from '../../components/Post/Post';

function PostWithVotes({ id, title, content, author, date }) {
    const post = useSelector((state) => state.post.posts.find((post) => post.id === id));
    const dispatch = useDispatch();

    const onIncrementButtonClicked = () => {
        dispatch(increment(id));
    };

    const onDecrementButtonClicked = () => {
        dispatch(decrement(id));
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
