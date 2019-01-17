import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentContainer = styled.div`
    margin-bottom: 8px;

    span {
        font-weight: 800;
        margin-right: 5px;
    }
`;

const Comment = props => {
    return (
        <CommentContainer>

            <p><span>{props.comment.username}</span>{props.comment.text}</p>
        </CommentContainer>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
};

export default Comment;