import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      userLiked: false
    }
  }

  componentDidMount() {
    this.setState({
      likes: this.props.post.likes
    })
  }

  likePost() {
    console.log(this.state.userLiked);
    this.state.userLiked === false ?
      this.setState(prevState => ({
        likes: ++prevState.likes,
        userLiked: true
      })) : 
      this.setState(prevState => ({
        likes: --prevState.likes,
        userLiked: false
      }))
  }

  render() {
    console.log(this.state.likes);
    return (
      <div className="post">
        <div className="post-header">
          <img className="user-icon" alt="User icon" src={this.props.post.thumbnailUrl} />
          <span>{this.props.post.username}</span>
        </div>
  
        <div className="post-img">
          <img alt="User's post" src={this.props.post.imageUrl} />
        </div>
        <div className="social-activation">
          <div className="social-activation-icons">
            <FontAwesomeIcon onClick={() => this.likePost()} size="2x" icon={faHeart} />
            <FontAwesomeIcon size="2x" flip="horizontal" icon={faComment} />
          </div>
  
          <p>{this.state.likes} likes</p>
        </div>
      </div>
    );
  }

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
