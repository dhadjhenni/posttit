import React from 'react';
import './Post.css';
import CommentList from '../CommentList/CommentList';

function Post({ title, content, author, date, children }) {
    return (
        <div className="post">
            <div className="post-inner">
                {children}
                <div className="post-media">
                    <a href="">
                        <img
                            src="https://placehold.co/120x120"
                            alt=""
                        />
                    </a>
                </div>
                <div className="post-content">
                    <p className="post-subreddit">
                        <a href="">r/Subreddit</a>
                    </p>
                    <h2>
                        <a href="">{title}</a>
                    </h2>
                    <div className="post-meta">
                        <p>
                            Posted by <a href="">{author}</a> / {date}
                        </p>

                        <p>
                            <a href="">123 comments</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="post-comments">
                <CommentList />
            </div>
        </div>
    );
}

export default Post;
