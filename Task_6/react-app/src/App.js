import React, {useEffect, useMemo, useRef, useState} from "react";
import NoteModal from "./components/NoteModal";
import NoteList from "./components/NoteList";
import NoteInput from "./UI/Inputs/NoteInput";
import NoteForm from "./components/NoteForm";
import NoteButton from "./UI/Buttons/NoteButton";
import NoteSearch from "./components/NoteSearch";
import NoteService from "./API/NotesService";
import AddNoteModal from "./UI/Modals/AddNoteModal";

import "./styles/App.css"

//var notes = [{ id:123, title:"1234", content:"123"}, { id:123, title:"1234", content:"123"}]

function App() {
  //const [notes, setNotes] = useState([{ id:111, title:"Req", content:"asd"}, { id:222, title:"zxc", content:"rty"}, { id:1112, title:"Req", content:"asd"}, { id:2223, title:"zxc", content:"rty"}])
  const [notes, setNotes] = useState(NoteService.getAll())
  const [searchQuery, setSearchQuery] = useState({query: ""})
  const [modal, setModal] = useState(false);

  //let [notes, setNotes] = useState([])

  const filterNotes = useMemo(() => {
    if(searchQuery.query === ""){
      return notes
    }
    return notes.filter(n => (n.title.toLocaleLowerCase().includes(searchQuery.query.toLocaleLowerCase()))
    || (n.content.toLocaleLowerCase().includes(searchQuery.query.toLocaleLowerCase())))
  }, [searchQuery, notes])

  const createNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const removeNotes = (note) => {
    setNotes(notes.filter(n => n.id !== note.id))
    //setNotes([...notes, note])
  }

  
  return (
    console.log( NoteService.getAll()),
    <div className="App">
      <NoteButton onClick={() => setModal(true)}>Create note</NoteButton>
      <AddNoteModal visible={modal} setVisible={setModal}><NoteForm create={createNote} setVisible={setModal}/></AddNoteModal>
      <NoteSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <NoteList notes = {filterNotes} remove = {removeNotes}/>   
    </div>
  );
}

//<NoteButton onClick={() => removeNotes("asd")} ></NoteButton>
export default App;