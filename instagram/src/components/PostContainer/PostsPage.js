import React from "react";
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import PropTypes from "prop-types";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      searchedData: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    });
  }

  handleSearch = event => {
    event.preventDefault();

    this.setState({
      dummyData: this.state.dummyData.filter(post => {
        return (
          post.username.toLowerCase() === this.state.searchTerm.toLowerCase()
        );
      })
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    
    return (
      <div className="App">
      <SearchBar
        dummyData={this.state.dummyData}
        handleSearch={this.handleSearch}
        handleChange={this.handleChange}
        searchTerm={this.state.searchTerm}
      />
        {this.state.dummyData.map(post => {
          return (
            <PostContainer post={post} key={1 + Math.random()} />
          );
        })}
      </div>
    );


}
}

export default PostsPage;
