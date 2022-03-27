import React from 'react';
import classes from './NoteButton.module.css';

const NoteButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default NoteButton;