import React, { Component } from 'react';

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
                <div>
                    <h1>Create New Note:</h1>
                    <form onSubmit={this.addNote}>
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleSubmit}
                            value={this.state.note.title}
                        />
                        <input
                            type="text"
                            name="textBody"
                            onChange={this.handleSubmit}
                            value={this.state.note.textBody}
                        />
                        <button type="submit" >Save</button>
                    </form>
                </div>
            )
        }

}


export default NewNote;
