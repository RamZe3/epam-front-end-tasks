import React from 'react';
import Task from './Task';

const TaskList = ({tasks}) => {
    if(tasks === undefined){
        return
    }

    return(
        <div className="tasks">
            {tasks.map(task =>
            <Task id={task.id} title={task.title} done={task.done} key={task.id}/>
            )}
        </div>
    )
}

export default TaskList