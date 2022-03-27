import React, { Component, useState } from 'react';
import NoteButton from '../UI/Buttons/NoteButton';
import NoteEditForm from './NoteEditForm';
import AddNoteModal from '../UI/Modals/AddNoteModal';


class NoteModal extends Component{
    
    constructor(props){
        super(props)

        this.modal = true
        this.state = {
            note: props.note,
            modal: false
            //remove: props.remove
        }
        this.setModal = this.setModal.bind(this)
    }

    setModal(par){
        this.setState({modal: par})
    }

    render(){
        return <div className="note">
            <NoteButton onClick={() => this.setModal(true)}>
            <div> Note {this.state.note.id} {this.state.note.title} {this.state.note.content}</div>
            </NoteButton>
            <NoteButton onClick={() => this.props.remove(this.state.note)}>
                Удалить
            </NoteButton>
            <AddNoteModal visible={this.state.modal} setVisible={this.setModal}><NoteEditForm editNote={this.state.note}></NoteEditForm></AddNoteModal>
        </div>
        
    }
}

export default NoteModal