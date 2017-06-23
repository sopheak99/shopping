import React, { Component } from 'react';
import Menu from './Components/Menu';
import Content from './Components/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />

        <div className="container">
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
