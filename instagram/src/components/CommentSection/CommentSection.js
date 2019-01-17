import React from "react";
import Comment from "./Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
// import "./Comments.css";
import styled from 'styled-components';
import PropTypes from "prop-types";

const CommentsContainer = styled.div`
  padding: 0 15px 15px;
  background: white;
`;

const AddCommentContainer = styled.div`
  margin: 0 15px;
  padding: 15px 0;
  border-top: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: grey;
  }

  input[type=text] {
    background: white;
    font-size: 0.8rem;
    width: 590px;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;


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
          username: this.props.username
        }
      ],
      commentText: ""
    }, this.addNewCommentToStorage)

    // localStorage.setItem("comments", JSON.stringify(this.state.comments))
  }

  addNewCommentToStorage = () => {
    localStorage.setItem("comments", JSON.stringify(this.state.comments))
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    
    return (
      <div>
        <CommentsContainer>
          {this.state.comments.map(comment => {
            return <Comment comment={comment} key={1 + Math.random()} />;
          })}
        </CommentsContainer>
        <AddCommentContainer>
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
        </AddCommentContainer>
      </div>
    );
  }

};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
