import React from 'react';

const BaseInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={props.className}/>
        
    );
});

export default BaseInput;