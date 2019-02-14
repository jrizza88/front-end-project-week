import React, { Component } from 'react';
import styled from 'styled-components';
import NoteList from './NoteList';
import NoteView from './NoteView';
import NewNote from './NewNote';
import axios from 'axios';

class MainView extends Component {
    constructor(){
        super();
        this.state = {
            notes: [{
                _id: null,
                tags: [],
                title: '',
                textBody: ''
            }]
        }
    }

    componentDidMount(){
        axios
        .get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then(response => {
            console.log('response', response)
           this.setState({notes:  response.data})
        })
        .catch(error => {
            console.error("error occured!", error)
        })
    }

    viewOneNote = id => {
        axios
        .get(`https://fe-notes.herokuapp.com/note/get/id`, id)
        .then(response => {
            console.log('response', response)
            this.setState({notes:  response.data})
        })
        .catch(error => {
            console.error("error occured!", error)
        })
    }

    postNote = create => {
        axios
        .post(`https://fe-notes.herokuapp.com/note/create`, create)
        .then(response => {
            console.log('POST request response', response)
            this.setState({ _id:  response.data.success})
        })
        .catch(error => {
            console.error("error occured!", error)
        })
    }



    render(){
        return (
            <MainViewContainer>
                {/* <NoteView />
                <NewNote addNote={this.postNote}/> */}
                <NoteList  notes={this.state.notes}/>
            </MainViewContainer>
        )
    }
}

export default MainView;


const MainViewContainer = styled.section`
display: flex;
background-color: whitesmoke;
flex-direction: row;
// max-width: 750px;
width: 100%;
height: 100vh;
justify-content: space-around;
align-items: flex-start;
`
