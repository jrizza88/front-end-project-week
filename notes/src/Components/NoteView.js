import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NoteView extends Component {
    constructor(props){
        super(props);
        this.state = {
            note: {
                tags: [],
                title: '',
                textBody: ''
            }
        }
    }

    

        render(){
            return (
                <div> <Link to="/viewNote">Individual Note view</Link>
                   <div><Link exact to="/viewNote/:id">ok..</Link></div> 
                </div>
            )
        }

}

export default NoteView;
