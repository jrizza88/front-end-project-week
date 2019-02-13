import React, { Component } from 'react';


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
                <div>
                    Individual Note view
                </div>
            )
        }

}

export default NoteView;
