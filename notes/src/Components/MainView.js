import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteView from './NoteView';
import NewNote from './NewNote';
import axios from 'axios';

class MainView extends Component {
    constructor(){
        super();
        this.state = {
            notes: [{
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
        .get(`https://fe-notes.herokuapp.com/note/get/id`)
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
            this.setState({ notes:  response.data.success})
        })
        .catch(error => {
            console.error("error occured!", error)
        })
    }



    render(){
        return (
            <div>
                <NoteView />
                <NewNote {...this.props} addNote={this.postNote}/>
                <NoteList {...this.props} notes={this.state.notes}/>
            </div>
        )
    }
}

export default MainView;



