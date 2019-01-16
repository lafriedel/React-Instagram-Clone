import React, { Component } from 'react';

import authenticate from './components/authentication/authenticate';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
  
    }
  }

  componentDidMount() {

  }


  render() {
      return (
        <div className="App">
        <DisplayedComponent />
        </div>
      );
  }
}

const DisplayedComponent = authenticate;

export default App;
