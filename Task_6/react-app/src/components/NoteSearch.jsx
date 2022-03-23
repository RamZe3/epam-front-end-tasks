import React, {useState} from 'react';
import NoteButton from '../UI/Buttons/NoteButton';
import NoteInput from '../UI/Inputs/NoteInput';

const NoteSearch = ({create}) => {
    const [note, setNote] = useState({title:"", content:""})


    const addNewNote = (e) => {
        e.preventDefault()
        const newNote = {
            id: Date.now(), ...note
        }
        create(newNote)
        setNote({title:"", content:""})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <NoteInput
                value={note.title}
                //onChange={e => setNote({...note, title: e.target.value})}
                type="text"
                placeholder="Title of note"
            />
            <NoteButton onClick={addNewNote}>Create note</NoteButton>
        </form>
    );
};

export default NoteSearch;
