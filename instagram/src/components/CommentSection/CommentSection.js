import React from "react";
import Comment from "./Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./Comments.css";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentText: ""
    }
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    })
  }

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          text: this.state.commentText,
          username: "lafriedel"
        }
      ],
      commentText: ""
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    
    return (
      <div>
        <div className="comments-section">
          {this.state.comments.map(comment => {
            return <Comment comment={comment} key={1 + Math.random()} />;
          })}
        </div>
        <div className="add-comment">
          <form onSubmit={this.addNewComment}>
            <input 
              name="commentText" 
              value={this.state.commentText}
              type="text" 
              placeholder="Add a comment..." 
              onChange={this.handleChange}
            />
          </form>
          <FontAwesomeIcon size="2x" icon={faEllipsisH} />
        </div>
      </div>
    );
  }

};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
