import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div>
            <Post post={props.post} />
            <CommentSection comments={props.post.comments} />
        </div>
    )
}

PostContainer.propTypes = {
    post: PropTypes.object
}

export default PostContainer;