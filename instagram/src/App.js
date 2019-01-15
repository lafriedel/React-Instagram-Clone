import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      searchTerm: ""
    }
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    })
  }

  handleSearch = event => {
    event.preventDefault();
    this.setState({
      dummyData: this.state.dummyData.filter(post => {
        return post.username.toLowerCase() === this.state.searchTerm.toLowerCase();
      })
    })
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  
  render() {
    console.log(dummyData);
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

export default App;
