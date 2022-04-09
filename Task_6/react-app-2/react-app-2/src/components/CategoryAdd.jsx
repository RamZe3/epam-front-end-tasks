import React, {useState} from 'react';
import BaseButton from '../UI/Buttons/BaseButton';
import BaseInput from '../UI/Inputs/BaseInput';

const CategoryAdd = ({addCategory}) => {

    const [title, seTitle] = useState("")

    const add = (e) => {
        console.log(addCategory)
        e.preventDefault()
        const newCategory = {
            id: Date.now(), title: title
        }
        addCategory(newCategory)
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
                placeholder="Category"
                className="form-control"
            />
            </div>
            <BaseButton onClick={add} className={'noteSearch btn btn-primary'} noClass={true}>Add</BaseButton>
            </div>

        </form>
    );
};

export default CategoryAdd;
