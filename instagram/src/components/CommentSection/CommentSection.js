import React from "react";
import Comment from "./Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
// import "./Comments.css";
import styled from 'styled-components';
import PropTypes from "prop-types";

const CommentsContainer = styled.div`
  padding: 0 15px 10px;
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

const TimeStamp = styled.p`
  font-size: 0.6rem;
  color: lightgrey;
  text-transform: uppercase;
  margin-top: 15px;
`;

const moment = require('moment');

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
    
    let timestamp = this.props.timestamp;
    console.log(timestamp);
    return (
      <div>
        <CommentsContainer>
          {this.state.comments.map(comment => {
            return <Comment comment={comment} key={1 + Math.random()} />;
          })}
          <TimeStamp>{moment(timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow()}</TimeStamp>
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
  username: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
