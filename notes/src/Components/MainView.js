import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Route, withRouter } from 'react-router-dom';

// Components
import NoteList from "./NoteList";
import NoteView from "./NoteView";
import NewNote from "./NewNote";
import EditNote from "./EditNote";

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
        console.error("GET error occured!", error);
      });
  }


  viewOneNote = _id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${_id}`)
      .then(response => {
        console.log("one note view", response.data);
        console.log("ID", _id);
        this.setState({ note: response.data.success });
      })
      .catch(error => {
        console.error("GET ID error occured!", error);
      });
  };

  
  postNote = (create) => {
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, create)
      .then(response => {
        console.log("POST request response", response);
        console.log("response.data", response.data)
        this.setState(prevState=>({notes: [create, ...prevState.notes]}))
        
        this.props.history.push('/')
        
      })
      .catch(error => {
        console.error("POST error occured!", error);
        // window.location.reload()
      });
  };

  editNote = (_id, note) => {
    console.log("PUT note", note);
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${_id}`, note)
      .then(response => {
        console.log("PUT/UPDATE req response: ", response);
        console.log("PUT/UPDATE ID: ", _id);
        // this.props.history.push(`/viewNote/${_id}`);
        // window.location.reload()
        // this.setState({ notes: [note, response.data.success]});
        this.setState({ notes: [note, ...this.state.notes]});
        this.props.history.push(`/viewNote/${note._id}`);
        this.props.notes.find(note => {return `/viewNote/${note._id}` === note});
        //  this.props.history.push(`/viewNote/${_id}`);
        // this.setState({ notes: [note, ...this.state.notes]});
        // this.props.history.push(`/viewNote/${_id}`);
        // this.setState({ notes: this.state.notes});
      
       
        
        // this.props.history.push(`/viewNote/${_id}`);
      })
      .catch(error => {
        console.log("PUT/UPDATE req error", error);
      });
  };

  deleteNote = _id => {
    console.log("delete note")
    axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${_id}`)
    .then (response => {
      console.log("delete note response", response)
      console.log("delete data response view...", response.data)
      // this.setState({notes: response.data})
    
      this.props.history.push("/")
      // window.location.reload()
    })
  }


  render() {
    return (
      <MainViewContainer>
        <Route
          exact path="/viewNote/:_id"
          render={props => (
            <NoteView
              {...props}
              indNote={this.viewOneNote}
              notes={this.state.notes}
              handleDeleteModal={this.deleteNote}
            />
          )}
        />
        <Route
         exact path="/editNote/:_id"
          render={props => <EditNote
             {...props}  
             notes={this.state.notes}
          editNote={this.editNote} />}
        /> 
        <Route
         exact path="/addNote"
          render={props => <NewNote 
            {...props} 
            addNote={this.postNote} 
            notes={this.state.notes}/>}
        />
        <Route
          exact
          path="/"
          render={props => <NoteList 
            {...props} 
            notes={this.state.notes} />}
        />
      </MainViewContainer>
    );
  }
}

export default withRouter(MainView);

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
