

export default class NoteService{
    static getAll(){
        //var notes1 = [{ id:111, title:"Req", content:"asd"}, { id:222, title:"zxc", content:"rty"}, { id:1112, title:"Req", content:"asd"}, { id:2223, title:"zxc", content:"rty"}]
        //localStorage.setItem('notes', JSON.stringify(notes1));
        let notes = localStorage.getItem("notes");
        notes = JSON.parse(notes)
        //alert(notes)
        return notes
    }

    static removeById(id){
        //var notes1 = [{ id:111, title:"Req", content:"asd"}, { id:222, title:"zxc", content:"rty"}, { id:1112, title:"Req", content:"asd"}, { id:2223, title:"zxc", content:"rty"}]
        //localStorage.setItem('notes', JSON.stringify(notes1));
        let notes = localStorage.getItem("notes");
        notes = JSON.parse(notes)
        notes = notes.filter(n => n.id !== id)
        alert("asd")
        localStorage.setItem('notes', JSON.stringify(notes));
        return
    }

    static editNote(note){
        let notes = localStorage.getItem("notes");
        notes = JSON.parse(notes)
        notes = notes.filter(n => n.id !== note.id)
        note.id = Date.now()
        notes = [{ id:note.id, title:note.title, content:note.content}, ...notes]
        localStorage.setItem('notes', JSON.stringify(notes));
        return
    }

    static addNote(note){
        let notes = localStorage.getItem("notes");
        notes = JSON.parse(notes)
        notes = [note, ...notes]
        alert("asd")
        localStorage.setItem('notes', JSON.stringify(notes));
        return
    }
}