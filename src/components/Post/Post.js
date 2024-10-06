import React from 'react';
import './Post.css';

function Post({ title, content, author, date, children }) {
    return (
        <div className="post">
            <h2>{title}</h2>
            <p className="post-meta">
                Posted by {author} on {date}
            </p>
            <p>{content}</p>
            <div className="post-div">{children}</div>
        </div>
    );
}

export default Post;
