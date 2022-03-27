import React, {useState} from 'react';
import NoteButton from '../UI/Buttons/NoteButton';
import NoteInput from '../UI/Inputs/NoteInput';

const NoteEditForm = ({editNewNote, editNote, setVisible}) => {
    const [note, setNote] = useState({title:editNote.title, content:editNote.content})


    const EditNewNote = (e) => {
        e.preventDefault()
        const newNote = {
            id: Date.now(), ...note
        }
        editNewNote(newNote)
        setNote({title:editNote.title, content:editNote.content})
        //setVisible(false);
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <NoteInput
                value={note.title}
                onChange={e => setNote({...note, title: e.target.value})}
                type="text"
                placeholder="Title of note"
            />
            {/*Неуправляемый\Неконтролируемый компонент*/}
            <NoteInput
                value={note.content}
                onChange={e => setNote({...note, content: e.target.value})}
                type="text"
                placeholder="Content of note"
            />
            <NoteButton onClick={editNewNote}>Create note</NoteButton>
        </form>
    );
};

export default NoteEditForm;
