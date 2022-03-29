import React from 'react';
import classes from './NoteButton.module.css';

const NoteButton = ({children, ...props}) => {
    console.log(props.noClass)
    if(props.noClass === true){
        return (
            <button {...props} className={props.className}>
                {children}
            </button>
        );
    }
    return (
        <button {...props} className={props.className + " " + classes.noteBtn}>
            {children}
        </button>
    );
};

export default NoteButton;