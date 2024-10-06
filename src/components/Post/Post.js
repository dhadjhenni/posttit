import React from 'react';
import './Post.css';

function Post({ title, content, author, date, children }) {
    return (
        <div className="post">
            {children}
            <div className="post-content">
                <p className="post-subreddit">r/Subreddit</p>
                <h2>{title}</h2>
                <div className="post-meta">
                    <p>
                        Posted by {author} / {date}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post;
