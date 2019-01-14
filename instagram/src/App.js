import React, { Component } from 'react';
import dummyData from './dummy-data';
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
    console.log(dummyData);
    return (
      <div className="App">
        {this.state.dummyData.map(post => {
          return (<div><PostContainer post={post} key={post.timestamp}/></div>);
        })}
      </div>
    );
  }
}

export default App;
