import React, { Component, useState } from 'react';

const Task = (props) => {
    return(
        <div className="task">
            <strong>{props.id + " " + props.title + " " + props.done}</strong>
        </div>
    )
}

export default Task