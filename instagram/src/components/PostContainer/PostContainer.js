import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
            {props.post.username}
            {props.post.comments.map(comment => {
                return <CommentSection comment={comment} key={1 + Math.random()} />
            })}
        </div>
    )
}

export default PostContainer;