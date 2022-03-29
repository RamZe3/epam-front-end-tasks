import React from 'react';

const TextAreaInput = React.forwardRef((props, ref) => {
    return (
        <textarea ref={ref} {...props} className={props.className}></textarea>
        
    );
});

export default TextAreaInput;