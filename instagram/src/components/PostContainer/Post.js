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
        username: PropTypes.string,
        likes: PropTypes.number,
        imageUrl: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        timestamp: PropTypes.string
    })
}

export default Post;
