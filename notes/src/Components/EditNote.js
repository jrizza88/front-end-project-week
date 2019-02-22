import React, { Component } from "react";
import styled from 'styled-components';


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
                  _id: null,
                  title: "",
                  textBody: ""
        };
      }

    handleChange = e => {
        // e.preventDefault();
        this.setState({      
                ...this.state,
                [e.target.name]: e.target.value       
        });
      
    };

    editNote = (e, _id) => {
        // editNote = (e, _id, title, textBody) => {
        e.preventDefault();
        let theId = this.props.match.params._id;

        // this.props.editNote(this.state.note);
        this.props.editNote(
            theId, 
              {
                _id: this.state._id,
                title: this.state.title,
                textBody: this.state.textBody
            }
            // this.state.notedata,
            // this.props.match.params._id,
            // this.props.history
          );
    }

    componentDidMount(){
        let title;
        let textBody;
        let _id;

        let theId = this.props.match.params._id;
        const noteBody = this.props.notes.find(note => {return `${note._id}` === theId});
       console.log("notebody", noteBody)
        if (noteBody){
            title = noteBody.title;
            textBody = noteBody.textBody;
            _id = noteBody._id;

            this.setState({
              
                title: title,
                textBody: textBody,
                _id: _id
            })

          }
          
        console.log('params', this.props.match.params._id);
        console.log("theId", theId)
    }

 

    render(){
        console.log("edit note props", this.props)
        console.log("title", this.state.title)
        console.log("textBody", this.state.textBody)
    
        return (
            <EditListContainer>
                <EditListHeader>Edit Note:</EditListHeader>
                <Form onSubmit={this.editNote}>
                        <Input
                            type="text"
                            name="title"
                            placeholder={this.state.title}
                            onChange={this.handleChange}
                            value={this.state.title}
                        />
                        <Input
                            type="text"
                            name="textBody"
                            placeholder={this.state.textBody}
                            onChange={this.handleChange}
                            value={this.state.textBody}
                        />
                        <UpdateButton type="submit">Update</UpdateButton>
                    </Form>
            </EditListContainer>
        )
    }


}

export default EditNote;

const EditListContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 100%;
`

const EditListHeader = styled.div`
  display: flex;
  margin-top: 5%;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  padding-bottom: 3%;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
width: 25%;
`;

const UpdateButton = styled.button`
    display: flex;
    justify-content: center;
    background-color: mediumturquoise;
    color: white;
    width: 15%;
    padding: 1% 6%;
    margin-top: 2.5%;
    // margin-bottom: 5%;
    font-size: 1rem;
    font-weight: bold;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;