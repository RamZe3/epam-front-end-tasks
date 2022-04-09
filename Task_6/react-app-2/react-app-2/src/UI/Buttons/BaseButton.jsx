import React from 'react';

const BaseButton = ({children, ...props}) => {
    return (
        <button {...props} className={props.className}>
            {children}
        </button>
    );
};

export default BaseButton;