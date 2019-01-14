import React from "react";
import Comment from "./Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./Comments.css";
import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <div>
      <div className="comments-section">
        {props.comments.map(comment => {
          return <Comment comment={comment} key={1 + Math.random()} />;
        })}
      </div>
      <div className="add-comment">
        <p>Add a comment...</p>
        <FontAwesomeIcon size="2x" icon={faEllipsisH} />
      </div>
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
