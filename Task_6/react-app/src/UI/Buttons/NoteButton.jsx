import React from 'react';
//import classes from './MyButton.module.css';

const NoteButton = ({children, ...props}) => {
    return (
        <button {...props} >
            {children}
        </button>
    );
};

export default NoteButton;