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
            <div> 
            <h2>{this.state.note.title}</h2>
            <h4>{this.state.note.content}</h4>
            </div>
            </NoteButton>
            <NoteButton className={"note-delete"} onClick={() => this.props.remove(this.state.note)}>🗑
            </NoteButton>
            <AddNoteModal visible={this.state.modal} setVisible={this.setModal}><NoteEditForm editNote={this.state.note} edit={this.props.edit}></NoteEditForm></AddNoteModal>
        </div>
        
    }
}

export default NoteModal