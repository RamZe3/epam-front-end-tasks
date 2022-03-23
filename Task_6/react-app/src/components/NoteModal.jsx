import React, { Component } from 'react';
import NoteButton from '../UI/Buttons/NoteButton';

class NoteModal extends Component{
    constructor(props){
        super(props)

        this.state = {
            note: props.note,
            //remove: props.remove
        }
    }

    render(){
        return <div className="note">
            <div> Note {this.state.note.id} {this.state.note.title} {this.state.note.content}</div>
            <NoteButton onClick={() => this.props.remove(this.state.note)}>
                Удалить
            </NoteButton>
        </div>
        
    }
}

export default NoteModal