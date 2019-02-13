import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteView from './NoteView';
import axios from 'axios';

class MainView extends Component {
    constructor(){
        super();
        this.state = {
            notes: []
        }
    }

    componentDidMount(){
        axios.
        get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then(response => {
            console.log('response', response)
           this.setState({notes:  response.data})
        })
        .catch(error => {
            console.error("error occured!", error)
        })
    }

    render(){
        return (
            <div>
                <NoteList notes={this.state.notes}/>
            </div>
        )
    }
}

export default MainView;



