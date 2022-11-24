import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import BaseButton from '../UI/Buttons/BaseButton';
import BaseInput from '../UI/Inputs/BaseInput';

const TaskAdd = ({addTask}) => {

    const dispatch = useDispatch()
    const [title, seTitle] = useState("")

    const add = (e) => {
        //console.log(addCategory)
        e.preventDefault()
        const newTask = {
            id: Date.now(), title: title, done:false
        }
        dispatch({type: "ADD_TASK", payload: newTask})
        seTitle("")
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <div class="input-group">
            <div class="form-outline">
            <BaseInput
                value={title}
                //onChange={e => setSearchQuery({...searchQuery, query: e.target.value})}
                onChange={e => seTitle(e.target.value)}
                type="text"
                placeholder="Task"
                className="form-control"
            />
            </div>
            <BaseButton onClick={add} className={'noteSearch btn btn-primary'} noClass={true}>Add</BaseButton>
            </div>

        </form>
    );
};

export default TaskAdd;
