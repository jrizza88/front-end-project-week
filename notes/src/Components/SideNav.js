import React from 'react';
import styled from 'styled-components';

const SideNav = props => {
return (
    <SideNavContainer>
        <ContentWrapper>
            <SideHeader>Lambda Notes</SideHeader>
            <ViewNotesButton>View Your Notes </ViewNotesButton>
            <CreateNewNoteButton>+ Create New Note</CreateNewNoteButton> 
        </ContentWrapper>
    </SideNavContainer>
    )
}

export default SideNav;

const SideNavContainer = styled.section`
    display: flex;
    background-color: lightgray;
    max-width: 250px;
    width: 100%;
    height:100vh;
`

const ContentWrapper = styled.section`
display: flex;
flex-direction: column;
margin: 0 10%;
`

const SideHeader = styled.h1`
font-size: 2.5rem;
`

const ViewNotesButton = styled.button`
    display: flex;
    justify-content: center;
    background-color: mediumturquoise;
    color: white;
    /* width: 100%; */
    padding: 5%;
    margin-bottom: 5%;
    font-size: 1rem;
    font-weight: bold;
`
const CreateNewNoteButton = styled.button`
    display: flex;
    justify-content: center;
    background-color: mediumturquoise;
    color: white;
    /* width: 100%; */
    padding: 5%;
    margin-top: 5%;
    font-size: 1rem;
    font-weight: bold;
`
