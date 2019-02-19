import React from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import PropTypes from "prop-types";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      searchTerm: "",
      username: props.username
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    });
  }

  handleSearch = event => {
    event.preventDefault();

    if (this.state.searchTerm === "") {
      this.setState({
        dummyData: dummyData
      })
    } else {
      this.setState({
        dummyData: this.state.dummyData.filter(post => {
          let username = post.username.toLowerCase();
          let search = this.state.searchTerm.toLowerCase();
  
          return username.includes(search);
        })
      });
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
          searchTerm={this.state.searchTerm}
        />
        {this.state.dummyData.map(post => {
          return (<PostContainer 
                    username={this.state.username} 
                    post={post}
                    key={1 + Math.random()} 
          />);
        })}
      </div>
    );
  }
}

PostsPage.propTypes = {
  username: PropTypes.string
}

export default PostsPage;
