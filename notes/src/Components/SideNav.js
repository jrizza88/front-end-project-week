import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SideNav = props => {
return (
    <SideNavContainer>
        <ContentWrapper>
            <SideHeader><StyledLink to={"/"} >Lambda Notes</StyledLink></SideHeader>
            <ViewNotesButton><StyledLink to={"/"}>View Your Notes</StyledLink> </ViewNotesButton>
            <CreateNewNoteButton><StyledLink to={"/addNote"}>+ Create New Note</StyledLink></CreateNewNoteButton> 
        </ContentWrapper>
    </SideNavContainer>
    )
}

export default SideNav;

const SideNavContainer = styled.section`
    display: flex;
    position: fixed;
    flex-grow: 1;
    background-color: lightgray;
    max-width: 250px;
    width: 100%;
    height:100vh;
`;

const ContentWrapper = styled.section`
display: flex;
flex-grow;
flex-direction: column;
margin: 0 10%;
`;

const SideHeader = styled.h1`
font-size: 2.5rem;
text-decoration: none;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`;

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
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
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
`;

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;