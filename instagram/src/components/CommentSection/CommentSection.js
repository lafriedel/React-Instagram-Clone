import React from 'react';
import Comment from './Comment';
import './Comments.css';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div className="comments-section">
            {props.comments.map(comment => {
                return (
                    <Comment comment={comment} key={1 + Math.random()} />
                )
            })}
        </div>

    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;