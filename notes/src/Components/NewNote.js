import React, { Component } from 'react';
import styled from 'styled-components';

// const home = props => {
//     props.history.push('/')
// }

class NewNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            note: [
                {
                  _id: null,
                  tags: [],
                  title: "",
                  textBody: ""
                }
              ]
        }
    }


    handleSubmit = e => {
        
        this.setState({
            note: {
            ...this.state.note,
            [e.target.name]: e.target.value                      
            }
        });
    };

    addNote = e => {
        e.preventDefault();
        this.props.addNote(this.state.note)
        this.setState({
            note: [{
                _id: null,
                tags: [],
                title: '',
                textBody: ''
            }]
        })
        // this.props.history.push('/')
    }

  

        render(){
            return (
                <CreateNoteContainer>
                    <CreateHeader>Create New Note:</CreateHeader>
                    <Form onSubmit={this.addNote}>
                        <Input
                            type="text"
                            name="title"
                            onChange={this.handleSubmit}
                            value={this.state.note.title}
                        />
                        <TextArea
                            type="text"
                            name="textBody"
                            onChange={this.handleSubmit}
                            value={this.state.note.textBody}
                        />
                        <SaveButton type="submit" >Save</SaveButton>
                    </Form>
                </CreateNoteContainer>
            )
        }

}


export default NewNote;

const CreateNoteContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: 10%;
width: 80%;
position: absolute;
`;

const CreateHeader = styled.div`
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
`;

const Input = styled.input`
width: 40%;
border: 1px solid black;
border-radius: 5px;
padding: 1.5% 1%;
margin: 1% 0;
font-size: 16px;
`;

const TextArea = styled.textarea`
width: 70%;
height: 350px;
max-width: 100%;
border: 1px solid black;
border-radius: 5px;
padding: 2% 1%;
margin: 1% 0;
font-size: 16px;
position: static;
`;

const SaveButton = styled.button`
    display: flex;
    justify-content: center;
    background-color: mediumturquoise;
    color: white;
    width: 20%;
    padding: 1% 6%;
    margin: 2.5% 0;
    // margin-bottom: 5%;
    font-size: 1rem;
    font-weight: bold;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;