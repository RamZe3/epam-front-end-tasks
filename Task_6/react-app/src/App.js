import React, {useEffect, useMemo, useRef, useState} from "react";
import NoteModal from "./components/NoteModal";
import NoteList from "./components/NoteList";
import NoteInput from "./UI/Inputs/NoteInput";
import NoteForm from "./components/NoteForm";
import NoteButton from "./UI/Buttons/NoteButton";
import NoteSearch from "./components/NoteSearch";
import NoteService from "./API/NotesService";

//var notes = [{ id:123, title:"1234", content:"123"}, { id:123, title:"1234", content:"123"}]

function App() {
  const [notes, setNotes] = useState([{ id:111, title:"Req", content:"asd"}, { id:222, title:"zxc", content:"rty"}, { id:1112, title:"Req", content:"asd"}, { id:2223, title:"zxc", content:"rty"}])
  const [searchQuery, setSearchQuery] = useState({query: ""})

  //let [notes, setNotes] = useState([])

  const filterNotes = useMemo(() => {
    if(searchQuery.query === ""){
      return notes
    }
    return notes.filter(n => !(n.title.toLocaleLowerCase().localeCompare(searchQuery.query.toLocaleLowerCase()))
    || !(n.content.toLocaleLowerCase().localeCompare(searchQuery.query.toLocaleLowerCase())))
  }, [searchQuery, notes])

  const createNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const removeNotes = (note) => {
    setNotes(notes.filter(n => n.id !== note.id))
    //setNotes([...notes, note])
  }

  
  return (
    //console.log(NoteService.getAll()),
    <div className="App">
      <NoteSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <NoteForm create={createNote}/>
      <NoteList notes = {filterNotes} remove = {removeNotes}/>   
    </div>
  );
}

//<NoteButton onClick={() => removeNotes("asd")} ></NoteButton>
export default App;