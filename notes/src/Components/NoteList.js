import React from "react";
import styled from "styled-components";
import NoteView from "./NoteView";
import { Link } from "react-router-dom";
import { Device } from "./Device";

  const NoteInfo = styled.div`
  display: flex;
  flexDirection: column;
  backgroundColor: white;
  border: solid 1px black;
  width: 25%;
  height: 200px;
  margin: 2.5%;
  padding: 1% 1.5%;

  @media (max-width: 900px) {
    width: 40%;
  };

  @media ${Device.tablet} {
    width: 60%;
  }
  `;



const NoteList = props => {

 
  return (
    <NotePageContainer>
      <WrapContent>
        <NoteListHeader> Your Notes: </NoteListHeader>
        <NoteCard >
          {props.notes.map(note => {
            let textbody = note.textBody;
               textbody = textbody.length > 110 ? textbody.substring(0, 110) + "...": textbody.substring(0, 110);
            return (
              <NoteInfo key={note._id}>
                <StyledLink to={`/viewNote/${note._id}`} title={note.title}
                textBody={note.textBody} _id={note._id} {...props} component={NoteView} >
                    <div>{note.tags}</div> 
                    <NoteTitle>{note.title}</NoteTitle>
                    <NoteBody>{textbody}</NoteBody>
                </StyledLink>

              </NoteInfo>
            );
          })}
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

  @media ${Device.tablet} {
    margin-top: 30%;
  }
`;

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media ${Device.mobileS}, ${Device.mobileM}, ${Device.mobileL} {
    width: 100%;
  }
`;

const NoteListHeader = styled.div`
  display: flex;
  margin-top: 5%;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;

  @media (max-width: 850px) {
    margin-left: 10%;
  }

  @media ${Device.mobileS}, ${Device.mobileM}, ${Device.mobileL} {
    margin-left: inherit;
  }
`;

const NoteCard = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 20vh;
  text-decoration: none;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const NoteTitle = styled.div`
  display: block;
  font-weight: bold;
  border-bottom: solid 3px lightgrey;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
`;

const NoteBody = styled.div`
display: block;
display: -webkit-box;
max-width: 100%;
height: 85%;
font-size: 1em;
line-height: 2;
-webkit-line-clamp: 6;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
text-decoration: none;
`;

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
