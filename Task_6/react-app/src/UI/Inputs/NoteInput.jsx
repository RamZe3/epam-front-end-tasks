import React from 'react';

const NoteInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={props.className}/>
        
    );
});

export default NoteInput;