import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import styled from 'styled-components';


const StyledPost = styled.div`
  width: 100%;
  font-weight: 800;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

const PostImg = styled.div`
  width: 100%;
  border: 1px solid lightgrey 0;
`;

const SocialContainer = styled.div`
  padding: 15px;
`;

const SocialIconContainer = styled.div`
  width: 55px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;



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
      <StyledPost>
        <PostHeader>
          <img className="user-icon" alt="User icon" src={this.props.post.thumbnailUrl} />
          <span>{this.props.post.username}</span>
        </PostHeader>
  
        <PostImg>
          <img alt="User's post" src={this.props.post.imageUrl} />
        </PostImg>
        <SocialContainer>
          <SocialIconContainer>
            <FontAwesomeIcon onClick={() => this.likePost()} size="2x" icon={faHeart} />
            <FontAwesomeIcon size="2x" flip="horizontal" icon={faComment} />
          </SocialIconContainer>
  
          <p>{this.state.likes} likes</p>
        </SocialContainer>
      </StyledPost>
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
