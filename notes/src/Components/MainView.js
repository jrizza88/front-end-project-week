import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Route } from "react-router-dom";

// Components
import NoteList from "./NoteList";
import NoteView from "./NoteView";
import NewNote from "./NewNote";

class MainView extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          _id: null,
          tags: [],
          title: "",
          textBody: ""
        }
      ]
    };
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        console.log("response", response);
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.error("error occured!", error);
      });
  }

  viewOneNote = _id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${_id}`)
      .then(response => {
        console.log("one note view", response.data);
        console.log("ID", _id);
        this.setState({ _id: response.data.success });
      })
      .catch(error => {
        console.error("error occured!", error);
      });
  };

  postNote = create => {
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, create)
      .then(response => {
        console.log("POST request response", response);
        this.setState({ _id: response.data.success });
      })
      .catch(error => {
        console.error("error occured!", error);
      });
  };

  render() {
    return (
      <MainViewContainer>
        <Route
          path="/viewNote/:_id"
          render={props => (
            <NoteView
              {...props}
              indNote={this.viewOneNote}
              notes={this.state.notes}
            />
          )}
        />
        {/* <Route path="/viewNote/:id" render={props => <NoteView {...props} indNote={this.viewOneNote} notes={this.state.notes}/>} /> */}
        <Route
          path="/addNote"
          render={props => <NewNote addNote={this.postNote} />}
        />
        <Route
          exact
          path="/"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
      </MainViewContainer>
    );
  }
}

export default MainView;

const MainViewContainer = styled.section`
  display: flex;
  background-color: whitesmoke;
  flex-direction: row;
  // max-width: 750px;
  margin-left: 25%;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: flex-start;
`;
