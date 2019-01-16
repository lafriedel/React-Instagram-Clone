import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './components/authentication/authenticate';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
      return (
        <div className="App">
        <PostsPage />
        </div>
      );
  }
}

export default App;
