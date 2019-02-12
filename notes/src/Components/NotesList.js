import React, { Component } from 'react';
import Note from './Note';

class NotesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tags: [],
            title: '',
            textBody: ''
        }
    }

        render(){
            const name = "Jamar T"
            return (
                <div>
                    <Note name={name}/>
                </div>
            )
        }

}

export default NotesList;
