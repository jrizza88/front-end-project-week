import React, { Component } from "react";
import styled from "styled-components";
import EditNote from './EditNote';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

const NoteInfo = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  border: "solid 1px black",
  width: "20%",
  height: "200px",
  margin: "5% 2.5%",
  padding: "1% 1.5%",
};


class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // note: [
      //   {
      //     _id: null,
      //     tags: [],
      //     title: "",
      //     textBody: ""
      //   }
      // ],
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
    console.log(this.props.match.params._id);

    let title;
    let textBody;
    let _id;

    const indNote = this.props.notes.find(note => { return `${note._id}` === theId});
    console.log(indNote);
     if (indNote){
      title = indNote.title;
      textBody = indNote.textBody;
      _id = indNote._id;
    }
    // const { title, textBody } = this.props;
    console.log("link was clicked", Link)
    console.log("this.props", this.props)
    return (
      <div>
		{(indNote)?
      <div>
        <h2>Individual Note view</h2>
        <div>
             <StyledLink to={`/editNote/${this.props.match.params._id}`} 
             {...this.props} 
             title={title}
             _id={_id}
             textBody={textBody}
             component={EditNote}
            >
            <button>Edit</button></StyledLink>
            <button onClick={this.openModal}>Delete</button>
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
        </div>
      </div>
		: 
		<div> other data </div>
		}
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

const NoteTitle = styled.div`
  display: block;
  border-bottom: solid 3px lightgrey;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
`;

const NoteBody = styled.div`
display: block;
display: -webkit-box;
max-width: 100%;
height: 85%;
font-size: 14px;
line-height: 2;
-webkit-line-clamp: 6;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
text-decoration: none;
`;