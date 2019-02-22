import React, { Component } from "react";
import styled from "styled-components";
import EditNote from './EditNote';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [
        {
          _id: null,
          title: "",
          textBody: ""
        }
      ],
  showModal: false
    };
  }

  // Open the modal 
  openModal = () => {
    this.setState({ showModal: true});
  }

  // Close out the modal / say no to deleting item 
  closeModal = () => {
    this.setState({ showModal: false});
  }

  handleDeleteModal = () => {
    let theId = this.props.match.params._id;
    console.log("delete theId", theId)
    console.log(this.state.note)
    this.props.handleDeleteModal(theId)
    this.setState({showModal: false})
  }

  render() {
    let theId = this.props.match.params._id;
    console.log("TheID NoteView", theId);

    let title;
    let textBody;
    let _id;

    const indNote = this.props.notes.find((note) => { return `${note._id}` === theId});
    console.log('indnote', indNote);
     if (indNote){
      title = indNote.title;
      textBody = indNote.textBody;
      _id = indNote._id;
    } 
    console.log("this.props", this.props)

    return (
      <DivContainer>
		{
      (indNote) ?
      <SectionContainer>

          <ButtonDiv>
          <EditDiv><StyledLink to={`/editNote/${this.props.match.params._id}`} 
              {...this.props} 
              title={title}
              _id={_id}
              textBody={textBody}
              component={EditNote}
              >
              Edit</StyledLink></EditDiv>
              <DeleteDiv onClick={this.openModal}>Delete</DeleteDiv>
          </ButtonDiv>
              <Modal
              isOpen={this.state.showModal}
              >
                <div>Are you sure you want to delete this note?</div>
                    <button onClick={this.handleDeleteModal}>Delete</button>
                    <button onClick={this.closeModal}>No</button>
              </Modal>
            <NoteContainer>
                <NoteTitle>{title} </NoteTitle>
                <NoteBody>{textBody}</NoteBody>
          </NoteContainer>

      </SectionContainer>
		: 
		<div> Other Data </div>
		}
	</DivContainer>
    );
  }
}

export default NoteView;

const DivContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
max-width: 1000px;
// border: 1px solid purple;
`
const SectionContainer = styled.div`
display: flex;
flex-direction: column;
`


const NoteContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 100%;
min-width: 700px
margin-top: 5%;
`;

const ButtonDiv = styled.div`
margin-top: 2.5%;
display: flex;
width: 100%;
justify-content: flex-end;
`

const EditDiv = styled.div`
font-weight: bold;
text-decoration: underline;
color: black;
margin-right: 2%;
`

const DeleteDiv = styled.div`
font-weight: bold;
text-decoration: underline;
`

const StyledLink = styled(Link)`
// border: 2px solid black;
text-decoration: none;
color: black;
`;


const NoteTitle = styled.div`
  display: block;
  font-weight: bold;
`;

const NoteBody = styled.div`
display: block;
margin-right: 2%;
margin-top: 3%;
max-width: 100%;
height: 85%;
font-size: 14px;
line-height: 2;
`;

