import React, {useState} from 'react';
import NoteButton from '../UI/Buttons/NoteButton';
import NoteInput from '../UI/Inputs/NoteInput';

const NoteSearch = ({searchQuery, setSearchQuery}) => {

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
            <NoteInput
                value={query}
                //onChange={e => setSearchQuery({...searchQuery, query: e.target.value})}
                onChange={e => setQuery(e.target.value)}
                type="text"
                placeholder="Title of note"
                className="form-control"
            />
            </div>
            <NoteButton onClick={search} className={'noteSearch btn btn-primary'} noClass={true}>Search</NoteButton>
            </div>

        </form>
    );
};

export default NoteSearch;
