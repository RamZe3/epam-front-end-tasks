import React, {useState} from 'react';
import NoteButton from '../UI/Buttons/NoteButton';
import NoteInput from '../UI/Inputs/NoteInput';
import TextAreaInput from '../UI/Inputs/TextAreaInput';

const NoteForm = ({create, setVisible}) => {
    const [note, setNote] = useState({title:"", content:""})


    const addNewNote = (e) => {
        e.preventDefault()
        const newNote = {
            id: Date.now(), ...note
        }
        create(newNote)
        setNote({title:"", content:""})
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
            <TextAreaInput
                value={note.content}
                onChange={e => setNote({...note, content: e.target.value})}
                type="text"
                placeholder="Content of note"
            />
            <br/>
            <NoteButton onClick={addNewNote} className={'btn-create-note'}>Create note</NoteButton>
        </form>
    );
};

export default NoteForm;
