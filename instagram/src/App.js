import React, { Component } from 'react';
// import PostsPage from './components/PostContainer/PostsPage;
// import Login from './components/Login/Login;
import authenticate from './components/authentication/authenticate';

import './App.css';

class App extends Component {
  render() {
      return (
        <div className="App">
        <DisplayedComponent />
        </div>
      );
  }
}

const DisplayedComponent = authenticate;
// const DisplayedComponent = authenticate(PostsPage)(Login);

export default App;
