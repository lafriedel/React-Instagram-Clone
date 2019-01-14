import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
            <Post post={props.post} />
            <CommentSection comments={props.post.comments} />
        </div>
    )
}


export default PostContainer;