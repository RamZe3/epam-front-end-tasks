import React from 'react';

const NoteInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props}/>
    );
});

export default NoteInput;