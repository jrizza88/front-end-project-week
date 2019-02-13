import React, { Component } from 'react';
import styled from 'styled-components';
import MainView from './Components/MainView';
import SideNav from './Components/SideNav';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        React Notes App!
        </header>
        <SideNav />
        <MainView />
      </div>
    );
  }
}

export default App;
