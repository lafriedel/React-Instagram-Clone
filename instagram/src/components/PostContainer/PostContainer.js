import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
            <CommentSection comments={props.post.comments} />
        </div>
    )
}


export default PostContainer;