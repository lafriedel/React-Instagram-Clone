import React from "react";
import PropTypes from 'prop-types';

const Post = props => {
  return (
      <div>
        <img src={props.post.thumbnailUrl} />
        <span>{props.post.username}</span>
        <div>
          <img src={props.post.imageUrl} />
        </div>
        <p>{props.post.likes} likes</p>
      </div>
  );
};

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        timestamp: PropTypes.string
    })
}

export default Post;
