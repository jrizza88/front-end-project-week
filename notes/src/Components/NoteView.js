import React, { Component } from "react";
import styled from "styled-components";
import EditNote from './EditNote';
import {Link} from 'react-router-dom';

// import NoteList from './NoteList';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notedata: {}
    };
  }

  componentDidMount() {
    let theId = this.props.match.params._id;
    console.log(this.props.match.params._id);

    const indNote = this.props.notes.find(note => note._id === theId);
    console.log(indNote);
    if (!indNote) return;
    this.setState({ notedata: indNote });

  }

  editNoteHandler = e => {
      e.preventDefault();
      this.props.editNoteHandler(this.state.notedata);
      console.log('was clicked')
  }


  deleteNoteHandler = () => {
    let theId = this.props.match.params._id;
    theId()
  }

  render() {
    const { title, textBody } = this.state.notedata;
    console.log("link was clicked", Link)
    return (
      <div>
        <h2>Individual Note view</h2>
        <div>
            {/* <button onClick={ e => {
            e.preventDefault();
                this.editNoteHandler(e, this.state.notedata)
            }
            }>Edit2</button> */}
             <button><StyledLink to={`/editNote/${this.theId}`} component={EditNote}
            >Edit</StyledLink></button>
            <button>Delete</button>
            <NoteContainer>
                <h1>{title}</h1>
                <div>{textBody}</div>
          </NoteContainer>
        </div>
      </div>
    );
  }
}

export default NoteView;


const NoteContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`

const StyledLink = styled(Link)`
border: 2px solid black;
`