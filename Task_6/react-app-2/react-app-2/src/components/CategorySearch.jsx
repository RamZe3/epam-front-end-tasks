import React, {useState} from 'react';
import BaseButton from '../UI/Buttons/BaseButton';
import BaseInput from '../UI/Inputs/BaseInput';

const CategorySearch = ({searchQuery, setSearchQuery}) => {

    const [query, setQuery] = useState("")

    const search = (e) => {
        e.preventDefault()
        setSearchQuery({...searchQuery, query: query})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <div class="input-group">
            <div class="form-outline">
            <BaseInput
                value={query}
                //onChange={e => setSearchQuery({...searchQuery, query: e.target.value})}
                onChange={e => setQuery(e.target.value)}
                type="text"
                placeholder="Category"
                className="form-control"
            />
            </div>
            <BaseButton onClick={search} className={'noteSearch btn btn-primary'} noClass={true}>Search</BaseButton>
            </div>

        </form>
    );
};

export default CategorySearch;
