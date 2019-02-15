import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import MainView from './Components/MainView';
import SideNav from './Components/SideNav';

// import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Route path="/" component={SideNav} />
        <MainView />
      </Container>
    );
  }
}

export default App;


const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width: 100%;
width: 100%;
`
