import React from 'react';
import styled from 'styled-components';

const Note = props => {
    const name = props.name;
   console.log(props.name)
    return (
        <div>Welcome, {name}</div>
    );
};


export default Note; 

