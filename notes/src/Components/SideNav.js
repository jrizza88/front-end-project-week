import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Device } from "./Device";

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

    @media ${Device.tablet} {
        max-width: 160px;
    }

    @media ${Device.laptopS} {
        max-width: 200px;
    }

     @media ${Device.mobileS}, ${Device.mobileM}, ${Device.mobileL}, ${Device.tablet}, (max-width: 630px),  {
        flex-direction: row;
        max-width: inherit;
        justify-content: center;
        padding-bottom: 10%;
        height: 100px;
        bottom: 85%;
        right: 0;
        margin-top: -2.5em;
    }

    @media (max-width: 500px) {
        height: 80px;
        margin-top: -2.5em;
        bottom: 90%;
    }
`;

const ContentWrapper = styled.section`
display: flex;
flex-grow;
flex-direction: column;
margin: 0 10%;

@media ${Device.tablet} {
    margin: 0 2%;
}

@media ${Device.laptopS} {
    margin: 0 3%;
}

@media ${Device.mobileS}, ${Device.mobileM}, ${Device.mobileL}, ${Device.tablet} {
   margin-top: 4%;
   flex-direction: row;
   justify-content: space-between;
}
`;

const SideHeader = styled.h1`
font-size: 2.5rem;
text-decoration: none;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}

@media ${Device.mobileL}, ${Device.tablet} {
    font-size: 2rem;
 }

 @media ${Device.mobileS}, ${Device.mobileM} {
    font-size: 1rem;
    margin-bottom: 3%;
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

    @media ${Device.mobileS}, ${Device.mobileM}, ${Device.mobileL}, ${Device.tablet} {
        width: 50%;
        align-items: center;
        margin-top: 5%;
        padding: 5% 4% 10% 3%;
     }

     @media ${Device.mobileS}, ${Device.mobileM} {
        width: 40%;
        align-items: center;
        margin-top: 5%;
        padding: 3% 2% 6% 2%;
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

    @media ${Device.mobileS}, ${Device.mobileM}, ${Device.mobileL}, ${Device.tablet} {
        width: 50%;
        margin-bottom: inherit;
        align-items: center;
        padding-bottom: 10%;
     }


     @media ${Device.mobileS}, ${Device.mobileM} {
        width: 40%;
        align-items: center;
        margin-top: 5%;
        padding: 3% 2% 6% 2%;
     }
`;

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;