import React from 'react';
import Comment from '../Comment/Comment';

function CommentList({ comments }) {
    // Dummy data for testing
    const dummyComments = [
        {
            id: 1,
            comment: 'This is a great post!',
            author: 'JohnDoe',
            date: '2023-04-15T10:30:00Z',
        },
        {
            id: 2,
            comment: "I disagree with some points, but overall it's interesting.",
            author: 'JaneSmith',
            date: '2023-04-15T11:45:00Z',
        },
        {
            id: 3,
            comment: 'Thanks for sharing this information!',
            author: 'BobJohnson',
            date: '2023-04-15T13:15:00Z',
        },
    ];

    // Use dummy data if comments is undefined or empty
    const displayComments = comments && comments.length > 0 ? comments : dummyComments;

    return (
        <>
            {displayComments.map((comment) => (
                <Comment
                    key={comment.id}
                    comment={comment.comment}
                    author={comment.author}
                    date={comment.date}
                />
            ))}
        </>
    );
}

export default CommentList;
