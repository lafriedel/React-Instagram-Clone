import React, { Component } from 'react';


import authenticate from './components/authentication/authenticate';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  }

  componentDidMount() {

  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = () => {

    localStorage.setItem("username", JSON.stringify(this.state.username));

  }

  render() {
      return (
        <div className="App">
        <Display />
        </div>
      );
  }
}

const Display = authenticate;
export default App;
