import React from 'react';
import styled from 'styled-components';

let NoteInfo = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    border: 'solid 1px black',
    width: '20%',
    height: '200px',
    margin: '5% 2.5%',
    padding: '1% 1.5%'
}

const NoteList = props => {
        return (
            <NotePageContainer>
                <WrapContent>
                    <NoteListHeader> Your Notes: </NoteListHeader>
                    <NoteCard>
                        {props.notes.map( note => {
                            return (
                            <div style={NoteInfo} key={note._id}>
                                <div>
                                    {note.tags}
                                </div>
                                <NoteTitle>
                                    {note.title}
                                </NoteTitle>
                                <NoteBody>
                                    {note.textBody}
                                </NoteBody>
                            </div>
                        )})
                        }
                    </NoteCard>
                </WrapContent>
            </NotePageContainer>
        );
    };

export default NoteList; 

const NotePageContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 100%;
`

const WrapContent = styled.div`
display: flex;
flex-direction: column;
width: 90%;
`

const NoteListHeader = styled.div`
    display: flex;
`

const NoteCard= styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 20vh;
`

const NoteTitle = styled.div`
display: block;
border-bottom: solid 3px lightgrey;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
`

const NoteBody = styled.div`
display: block;
display: -webkit-box;
max-width: 100%;
height: 85%;
font-size: 14px;
line-height: 2;
-webkit-line-clamp: 6;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
}
`


