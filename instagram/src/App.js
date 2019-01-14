import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
      <SearchBar />
        {this.state.dummyData.map(post => {
          return (
          <div className="post-container">
            <PostContainer post={post} key={1 + Math.random()} />
          </div>
          );
        })}
      </div>
    );
  }
}

export default App;
