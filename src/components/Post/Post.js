import React from "react";

import "./post.css";

export const Post = () => {


    return (
        <div className="post-container">
            <p className="sub-poster">r/subreddit</p>
            <p className="post-title">This is the Title of the Post</p>
            <div className="post-content">Post Contents</div>
            <p className="sub-poster">u/originalposter</p>
        </div>
    )
}