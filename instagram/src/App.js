import React, { Component } from 'react';
// import PostsPage from './components/PostContainer/PostsPage;
// import Login from './components/Login/Login;
import authenticate from './components/authentication/authenticate';

import styled from 'styled-components';
// import './App.css';


const AppDiv = styled.div`
  margin: 0 auto;
`;


class App extends Component {
  render() {
      return (
        <AppDiv >
          <DisplayedComponent />
        </AppDiv>
      );
  }
}

const DisplayedComponent = authenticate;
// const DisplayedComponent = authenticate(PostsPage)(Login);

export default App;
