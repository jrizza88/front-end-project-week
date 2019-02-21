import React from "react";
import styled from "styled-components";
import NoteView from "./NoteView";
import { Link } from "react-router-dom";

const NoteInfo = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  border: "solid 1px black",
  width: "20%",
  height: "200px",
  margin: "5% 2.5%",
  padding: "1% 1.5%",
};



const NoteList = props => {

 
  return (
    <NotePageContainer>
      <WrapContent>
        <NoteListHeader> Your Notes: </NoteListHeader>
        <NoteCard >
          {props.notes.map(note => {
            return (
              <div style={NoteInfo} key={note._id}>
                <StyledLink to={`/viewNote/${note._id}`} title={note.title}
                textBody={note.textBody} _id={note._id} {...props} component={NoteView} >
                    <div>{note.tags}</div> 
                    <NoteTitle>{note.title}</NoteTitle>
                    <NoteBody>{note.textBody}</NoteBody>
                </StyledLink>

              </div>
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
`;

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const NoteListHeader = styled.div`
  display: flex;
  margin-top: 5%;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const NoteCard = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 20vh;
  text-decoration: none;
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
font-size: 12.5px;
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



// const NoteList = props => {
//   return (
//     <NotePageContainer>
//       <WrapContent>
//         <NoteListHeader> Your Notes: </NoteListHeader>
//         <NoteCard >
//           {props.notes.map(note => {
//             return (
//               <div style={NoteInfo} key={note._id}>
//                 <StyledLink to={`/viewNote/${note._id}`} component={NoteView}>
//                     {/* <div>{note.tags}</div> */}
//                     <NoteTitle>{note.title}</NoteTitle>
//                     <NoteBody>{note.textBody}</NoteBody>
//                 </StyledLink>
//               </div>
//             );
//           })}
//         </NoteCard>
//       </WrapContent>
//     </NotePageContainer>
//   );
// };