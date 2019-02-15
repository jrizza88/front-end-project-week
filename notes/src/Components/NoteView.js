import React, { Component } from "react";

// import NoteList from './NoteList';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notedata: {}
    };
  }

  componentDidMount() {
    let theId = this.props.match.params._id;
    console.log(this.props.match.params);

    const indNote = this.props.notes.find(note => note._id === theId);
    console.log(indNote);
    if (!indNote) return;
    this.setState({ notedata: indNote });
    // console.log("indNote", indNote);
    // console.log(this.state.notedata);
  }

  render() {
    const { title, textBody } = this.state.notedata;
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
