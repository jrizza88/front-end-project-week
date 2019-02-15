import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import NoteList from './NoteList';

class NoteView extends Component {
    constructor(props){
        super(props);
        this.state = {
            notedata: {}
        }
    }


    componentDidMount() {
        let theId;

        if (this.props.noteId) {
            theId = this.props.noteId;
        } else {
            theId = this.props.match.params.noteId;
        }
        const indNote = this.props.notes.find(note => note._id === Number(theId));
        if (!indNote) return;
        this.setState({notedata: indNote})
console.log("indNote", indNote);

    }


    
        render(){
            const {  title, textBody} = this.state.notedata;
            return (
                <div> 
                    <h2>Individual Note view</h2>
                   <div>
                  
                                <h1>{title}</h1>
                                <div>{textBody}</div>
                  

                   </div> 
                </div>
            );
        }

}

export default NoteView;
