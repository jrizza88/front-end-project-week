import React, { Component } from "react";


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                _id: null,
                tags: [],
                title: '',
                textBody: ''
            }
        };
      }

    handleChange = e => {
        this.setState({
            note: {
                ...this.state.note,
                [e.target.name]: e.target.value
            }
        });
    };

    editNoteHandler = e => {
        e.preventDefault();
        this.props.editNoteHandler(this.state.note);
        // this.setState({
        //     note: {
        //         tags: [],
        //         title: this.state.title,
        //         textBody: this.state.textBody
        //     }
        // })
        // this.props.history.push('/')
    }

    componentDidMount(){
        console.log("note", this.state.note)
        let theId = this.props.match.params._id;
        console.log('params', this.props.match.params._id);

    const indNote = this.props.notes.find(note => note._id === theId);
    console.log(indNote);

    if (!indNote) return;
    this.setState({ note: indNote });
    }

 

    render(){
        return (
            <div>
                <form onSubmit={this.editNoteHandler}>
                        <input
                            type="text"
                            name="title"
                            placeholder={this.state.note.title}
                            onChange={this.handleChange}
                            value={this.state.note.title}
                        />
                        <input
                            type="text"
                            name="textBody"
                            placeholder={this.state.note.textBody}
                            onChange={this.handleChange}
                            value={this.state.note.textBody}
                        />
                        <button type="submit" >Update Note</button>
                    </form>
            </div>
        )
    }


}

export default EditNote;