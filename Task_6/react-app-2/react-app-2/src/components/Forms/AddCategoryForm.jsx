import React, {useState} from 'react';
import BaseButton from '../../UI/Buttons/BaseButton';
import BaseInput from '../../UI/Inputs/BaseInput';

const AddCategoryForm = ({create, setVisible}) => {
    const [category, setCategory] = useState({title:"", content:""})


    const addNewCategory = (e) => {
        e.preventDefault()
        const newCategory = {
            id: Date.now(), ...category
        }
        create(newCategory)
        setCategory({title:"", content:""})
    }

    return (
        <form>
            <BaseInput
                value={category.title}
                onChange={e => setCategory({...category, title: e.target.value})}
                type="text"
                placeholder="Title of category"
            />
            <br/>
            <BaseButton onClick={addNewCategory} className={'btn-create-note'}>Create category</BaseButton>
        </form>
    );
};

export default AddCategoryForm;
