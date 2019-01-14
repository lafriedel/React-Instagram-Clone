import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

const Post = props => {
  return (
    <div className="post">
      <div className="post-header">
        <img className="user-icon" src={props.post.thumbnailUrl} />
        <span>{props.post.username}</span>
      </div>

      <div className="post-img">
        <img src={props.post.imageUrl} />
      </div>
      <div className="social-activation">
        <div className="social-activation-icons">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faComment} />
        </div>

        <p>{props.post.likes} likes</p>
      </div>
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
};

export default Post;
