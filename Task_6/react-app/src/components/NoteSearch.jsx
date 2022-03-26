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
            <NoteInput
                value={query}
                //onChange={e => setSearchQuery({...searchQuery, query: e.target.value})}
                onChange={e => setQuery(e.target.value)}
                type="text"
                placeholder="Title of note"
            />
            <NoteButton onClick={search}>Search</NoteButton>
        </form>
    );
};

export default NoteSearch;
