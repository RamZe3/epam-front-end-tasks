

export default class NoteService{
    static getAll(){
        var notes1 = [{ id:111, title:"Req", content:"asd"}, { id:222, title:"zxc", content:"rty"}, { id:1112, title:"Req", content:"asd"}, { id:2223, title:"zxc", content:"rty"}]
        localStorage.setItem('notes', JSON.stringify(notes1));
        let notes = localStorage.getItem("notes");
        notes = JSON.parse(notes)
        //alert(notes)
        return notes
    }
}