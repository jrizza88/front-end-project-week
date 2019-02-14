import React from 'react';
import styled from 'styled-components';


const NoteList = props => {
        return (
            <div>
                <div>
                    {props.notes.map( note => {
                        return (
                        <div key={note._id}>
                            <div>
                                {note.tags}
                            </div>
                            <div>
                                {note.title}
                            </div>
                            <div>
                                {note.textBody}
                            </div>
                        </div>
                    )})
                    }
                </div>
            </div>
        );
    };

export default NoteList; 

