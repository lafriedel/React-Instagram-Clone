import React from 'react';
import Comment from './Comment';

const CommentSection = props => {
    return (
        <div>
            {/* {console.log(props)} */}
            {props.comments.map(comment => {
                return (
                    <Comment comment={comment} key={1 + Math.random()} />
                )
            })}
        </div>

    )
}

export default CommentSection;