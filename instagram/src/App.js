import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import authenticate from './components/authentication/authenticate';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",

    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = event => {

    localStorage.setItem("username", JSON.stringify(this.state.username))

  }

  render() {
      return (
        <div className="App">
        <Display />
        {/* <Login login={this.login} handleChange={this.handleChange} /> */}
        </div>
      );
  }
}

const Display = authenticate(PostsPage);
export default App;
