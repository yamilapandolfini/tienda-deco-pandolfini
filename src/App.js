import React, { Component } from 'react';
import './App.css';

//Components del NavBar
import './components/NavBar';
import NavBar from './components/NavBar';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar></NavBar>
      </div>
    );
  }
}

export default App;
