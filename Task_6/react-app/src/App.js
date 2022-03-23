import React, {useEffect, useRef, useState} from "react";
import NoteModal from "./components/NoteModal";
import NoteList from "./components/NoteList";
import NoteInput from "./UI/Inputs/NoteInput";
import NoteForm from "./components/NoteForm";
import NoteButton from "./UI/Buttons/NoteButton";

//var notes = [{ id:123, title:"1234", content:"123"}, { id:123, title:"1234", content:"123"}]

function App() {
  const [notes, setNotes] = useState([{ id:111, title:"Req", content:"asd"}, { id:222, title:"zxc", content:"rty"}, { id:1112, title:"Req", content:"asd"}, { id:2223, title:"zxc", content:"rty"}])

  //let [notes, setNotes] = useState([])

  const createNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const removeNotes = (note) => {
    setNotes(notes.filter(n => n.id !== note.id))
    //setNotes([...notes, note])
  }

  
  return (
    console.log(notes),
    <div className="App">
      <NoteInput/>
      <NoteForm create={createNote}/>
      <NoteList notes = {notes} remove = {removeNotes}/>   
    </div>
  );
}

//<NoteButton onClick={() => removeNotes("asd")} ></NoteButton>
export default App;