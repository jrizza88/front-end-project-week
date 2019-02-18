import React, { Component } from "react";


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // note: [
            //     {
                  _id: null,
                  tags: [],
                  title: "",
                  textBody: ""
            //     }
            //   ]
        };
      }

    handleChange = e => {
        this.setState({
            // note: {
                ...this.state,
                [e.target.name]: e.target.value
            // }
        });
    };

    editNote = (e, _id, title, textBody) => {
        e.preventDefault();
        let theId = this.props.match.params._id;
       
        // this.props.editNote(this.state.note);
        this.props.editNote(
            theId, 
              {
                title: this.state.title,
                textBody: this.state.textBody
            }
            // this.state.notedata,
            // this.props.match.params._id,
            // this.props.history
          );
    }

    componentDidMount(){
        console.log("note", this.state.note)
        let title;
        let textBody;
        let _id;

        let theId = this.props.match.params._id;
        const noteBody = this.props.notes.find(note => {return `${note._id}` === theId});
       console.log("notebody", noteBody)
        if (noteBody){
            title = noteBody.title;
            textBody = noteBody.textBody;
            _id = noteBody._id;

            this.setState({
              
                title: title,
                textBody: textBody
            })

          }
          
        console.log('params', this.props.match.params._id);
        console.log("theId", theId)

    
    // console.log(editNote);

    // if (!editNote) return;
    // this.setState({ note: editNote });
    }

 

    render(){
        console.log("edit note props", this.props)
        // console.log("state", this.state.note)
        console.log("title", this.state.title)
        console.log("textBody", this.state.textBody)
    
        return (
            <div>
                <form onSubmit={this.editNote}>
                        <input
                            type="text"
                            name="title"
                            placeholder={this.state.title}
                            onChange={this.handleChange}
                            value={this.state.title}
                        />
                        <input
                            type="text"
                            name="textBody"
                            placeholder={this.state.textBody}
                            onChange={this.handleChange}
                            value={this.state.textBody}
                        />
                        <button type="submit">Update Note</button>
                    </form>
            </div>
        )
    }


}

export default EditNote;