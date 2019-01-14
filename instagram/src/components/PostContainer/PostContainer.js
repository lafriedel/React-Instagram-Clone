import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import './Posts.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className="post-container">
            <Post post={props.post} />
            <CommentSection comments={props.post.comments} />
        </div>
    )
}

PostContainer.propTypes = {
    post: PropTypes.object.isRequired,
}

export default PostContainer;