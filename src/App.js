import React, { Component } from 'react';
import DefaultComponent from './components/DefaultComponent'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DefaultComponent count={1} title="Hey there"/>
      </div>
    );
  }
}

export default App;
