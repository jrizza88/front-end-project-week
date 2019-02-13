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

    postNote =  e => {
        e.preventDefault();
        this.props.postNote(this.state.note)
        this.setState({
            note: {
                tags: [],
                title: '',
                textBody: ''
            }
        })
    }

    handleSubmit(e){
        this.setState({
            ...this.state.note,
            [e.target.name]: e.target.value
        })
    }

        render(){
            return (
                <div>
                    <h1>Create New Note:</h1>
                    <form onSubmit={this.postNote}>
                        <input
                            type="text"
                            name="title"
                            value={this.state.note.title}
                            onChange={this.handleSubmit}
                        />
                        <input
                            type="text"
                            name="textBody"
                            value={this.state.note.textBody}
                            onChange={this.handleSubmit}
                        />
                        <button type="submit">Save</button>
                    </form>
                </div>
            )
        }

}

export default NoteView;
