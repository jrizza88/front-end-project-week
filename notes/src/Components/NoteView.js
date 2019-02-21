import React, { Component } from "react";
import styled from "styled-components";
import EditNote from './EditNote';
import {Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';



class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [

        {
          _id: null,
          title: "",
          textBody: "",

        }
      ],
  showModal: false
    };

  }

  // componentDidUpdate(prevProps, prevState){
  //  if (
  //    prevState.theId !== this.state.theId
  //  ) {
  //    console.log(`Update ${this.state.theId}`
  //    );
  //    return fetchData({
  //       notes: this.state.
  //    })
  // }


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

  // componentDidUpdate(prevProps, prevState){
  //   let title;
  //   let textBody;
  //   let _id;
  //   const prevPostId = prevProps.match.params._id;
  //   let theId = this.props.match.params._id;

  //   const indNote = this.props.notes.find(note => {return `${note._id}` === theId});
    
  //   if (prevPostId !== theId){
  //     this.indNote(theId)
  //   }
   
  //  console.log("indNote update", indNote)
  //   if (indNote){
  //       title = indNote.title;
  //       textBody = indNote.textBody;
  //       _id = indNote._id;

  //       this.setState({
          
  //           title: title,
  //           textBody: textBody,
  //           _id: _id
  //       })

  //     }
    
  // console.log("PREVIOUS POST ID AFTER EDIT IS RENDERED", prevPostId)
  //   console.log('params', this.props.match.params._id);
  //   console.log("theId", theId)
  // }


//   componentDidMount(){
//     let title;
//     let textBody;
//     let _id;

//     let theId = this.props.match.params._id;
//     const indNote = this.props.notes.find(note => {return `${note._id}` === theId});
//    console.log("notebody", indNote)
//     if (indNote){
//         title = indNote.title;
//         textBody = indNote.textBody;
//         _id = indNote._id;

//         this.setState({
          
//             title: title,
//             textBody: textBody,
//             _id: _id
//         })

//       }
      
//     console.log('params', this.props.match.params._id);
//     console.log("theId", theId)
// }

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
      <div>
		{
      (indNote) ?
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
		<div> Other Data </div>
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

// const Link = styled(Link)`
// border: 2px solid black;
// `

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