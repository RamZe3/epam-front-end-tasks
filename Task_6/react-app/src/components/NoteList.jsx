import React, { Component } from 'react';
import NoteModal from './NoteModal';

class NoteList extends Component{
    constructor(props){
        super(props)

        this.state = {
            //notes: props.notes,
            //remove: props.remove
        }
    }

    

    render(){
        return <div className="List">
            {this.props.notes.map(note => 
                <NoteModal note = {note} key = {note.id} remove = {this.props.remove} />
                )}
        </div>
    }
}

export default NoteList