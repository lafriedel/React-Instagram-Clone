import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import './Posts.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPostContainer = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 642px;
    margin: 0 auto;
    margin-bottom: 60px;
    background: white;
`;

const PostContainer = props => {
    return (
        <StyledPostContainer>
            <Post post={props.post} />
            <CommentSection 
                username={props.username} 
                comments={props.post.comments}
                timestamp={props.post.timestamp}
                usernameOfPoster={props.post.username} />
        </StyledPostContainer>
    )
}

PostContainer.propTypes = {
    post: PropTypes.object.isRequired,
    username: PropTypes.string
}

export default PostContainer;