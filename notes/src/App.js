import React, { Component } from 'react';
import styled from 'styled-components';
import NotesList from './Components/NotesList';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <NotesList />
      </div>
    );
  }
}

export default App;
