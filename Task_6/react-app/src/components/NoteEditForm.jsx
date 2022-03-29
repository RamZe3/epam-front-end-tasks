import React, {useState} from 'react';
import NoteButton from '../UI/Buttons/NoteButton';
import NoteInput from '../UI/Inputs/NoteInput';
import TextAreaInput from '../UI/Inputs/TextAreaInput';
import cl from "../UI/Modals/AddNoteModal.module.css"

const NoteEditForm = ({edit, editNote, setVisible}) => {
    const [notee, setNote] = useState({id: editNote.id ,title:editNote.title, content:editNote.content})


    const EditNewNote = (e) => {
        e.preventDefault()
        const newNote = {
            ...notee
        }
        edit(newNote)
        setNote({title:editNote.title, content:editNote.content})
        //setVisible(false);
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <NoteInput
                value={notee.title}
                onChange={e => setNote({...notee, title: e.target.value})}
                type="text"
                placeholder="Title of note"
            />
            {/*Неуправляемый\Неконтролируемый компонент*/}
            <br/>
            <TextAreaInput
                value={notee.content}
                onChange={e => setNote({...notee, content: e.target.value})}
                type="text"
                placeholder="Content of note"
            />
            <NoteButton onClick={EditNewNote} className={'btn-create-note'}>Edit note</NoteButton>
        </form>
    );
};

export default NoteEditForm;
