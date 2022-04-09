import React, { Component, useState } from 'react';
import BaseButton from '../UI/Buttons/BaseButton';
import cl from "../UI/Buttons/BaseButton.module.css"
const Task = (props) => {
    return(
        <div className="task">
            <div className='task-inp'>
            <div className='task-text'><strong>{props.id + " " + props.title + " " + props.done}</strong></div>
            <BaseButton className={cl.buta}>Edit</BaseButton>
            </div>
        </div>
    )
}

export default Task