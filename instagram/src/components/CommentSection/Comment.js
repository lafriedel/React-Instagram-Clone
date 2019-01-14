import React from 'react';

const Comment = props => {
    return (
        <div>
            {console.log(props)}
            {props.comment.username}
            {props.comment.text}
        </div>
    )
}

export default Comment;