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
          title: "",
          textBody: ""
        }
      ],
      error: ''
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
        this.setState(previousState=>({notes: [create, ...previousState.notes]}))
        
        this.props.history.push('/')
        
      })
      .catch(error => {
        console.error("POST error occured!", error);
      });
  };

  editNote = (_id, note) => {
    console.log("PUT note", note);
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${_id}`, note)
      .then(response => {
        console.log("PUT/UPDATE req response: ", response.data);
        console.log("PUT/UPDATE ID: ", _id);
        this.setState( theState => {         
          let mappedArray = theState.notes.map( i => 
              i._id === _id ? response.data: i
            );
            return {notes: mappedArray}
        })
         console.log('note in PUT', note)
         console.log("this.state.notes", this.state.notes)
        this.props.history.push(`/viewNote/${note._id}`);
      })
      .catch(error => {
        console.error("PUT/UPDATE req error", error);
        this.setState({
          // notes: [note, this.state.notes],
          notes: "[note, this.state.notes]",
          error: this.state.error
        })
      });
  };

  deleteNote = _id => {
    
    console.log("delete note")
    axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${_id}`)
    .then (response => {
          // this.setState ( deleteState => {
          //   let deleteItem = deleteState.notes.filter ( i =>
          //       i._id === _id ? response.data.success: i
          //   );
          //   return {notes: deleteItem}
          // }

          // )   
          this.setState ( deleteState => {
            let deleteItem = deleteState.notes.filter ( i =>
                i._id !== _id ? this.state.notes : null
            );
            return {notes: deleteItem}
          }

          ) 
           console.log("delete,", response);
      console.log("delete data response view...", response.data)
      // this.setState({notes: [_id, this.state.notes]})
      // window.location.reload()
      this.props.history.push("/")
    })
    .catch(error => {
      console.log("DELETE req error", error);
    });
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
             error={this.state.error}
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
