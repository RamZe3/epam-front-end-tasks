import React, {useState} from 'react';
import BaseButton from '../UI/Buttons/BaseButton';
import BaseInput from '../UI/Inputs/BaseInput';

const TaskSearchCheckbox = ({searchCheckQuery, setSearchCheckQuery}) => {

    const [query, setQuery] = useState("")

    const search = (e) => {
        //e.preventDefault()
        alert(e.target.value)
        //setSearchQuery({...searchQuery, query: query})
    }

    return (
        <form className='check-inp'>
            {/*Управляемый компонент*/}
            <div class="input-group">
            <div class="form-outline">
            <BaseInput
                value={searchCheckQuery.query}
                //onChange={e => setSearchQuery({...searchQuery, query: e.target.value})}
                //onChange={e => alert(e.target.value)}
                //onClick={e => setSearchCheckQuery(e.target.checked)}
                onChange={e => setSearchCheckQuery(e.target.value)}
                onClick={e => setSearchCheckQuery(e.target.value)}
                type="checkbox"
                //className="form-control"
            />
        <span>   </span>Show done...
            </div>
            </div>

        </form>
    );
};

export default TaskSearchCheckbox;
