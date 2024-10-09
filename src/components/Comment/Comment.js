import React from 'react';
import './Comment.css';

function Comment({ comment, author, date }) {
    return (
        <div className="comment">
            <p>{comment}</p>
            <p>
                Posted by {author} on {date}
            </p>
        </div>
    );
}

export default Comment;
