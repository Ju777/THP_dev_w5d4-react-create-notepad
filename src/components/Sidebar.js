import React , {useState} from 'react';
import { nanoid } from 'nanoid'
import '../styles/Sidebar.css'
import notepadImage from '../assets/images/react-notepad-image.png';


function Sidebar({localStorageArray, getText, getNewNoteButtonPosition}){
    const [ editButtonPosition, setEditButtonPosition ] = useState(false);
    const [ titleToEdit, setTitleToEdit ] = useState('');
    const [ textToEdit, setTextToEdit ] = useState('');

    function displayAllNotes(){
        return(
            <div id="all-notes-container">
                {/* <h4>Your notes :</h4> */}
                {
                    localStorageArray.map(note => (
                        <div key = {nanoid()} className='sidebar-note-container'>
                            {/* <p>&lt;div className='sidebar-note-container'&gt;</p> */}
                            <div id="sidebar-title-container">
                                <h6 key = {nanoid()} className='sidebar-note-title'>Title : {Object.keys(note)[0]}</h6>
                                <div id="sidebar-editing-buttons-container">
                                    <button
                                        key = {nanoid()}
                                        className = "btn btn-light"
                                        onClick = { () => { switchEditButton(Object.keys(note)[0], Object.values(note)[0]) }}>EDIT</button>
                                    <button
                                        key = {nanoid()}
                                        className = "btn btn-danger"
                                        onClick={ () => handleRemove(Object.keys(note)[0]) }>DEL</button>
                                </div>
                            </div>
                            <div id="sidebar-text-container">
                            <p
                                key = {nanoid()}
                                className='sidebar-note-excerpt'>{Object.values(note)[0]}</p>
                            </div>
                        </div>
                        ))
                }
            </div>
            )
    }

    function displayNoteToEdit(){
        console.log("displayNoteToEdit()", titleToEdit, textToEdit)
        return(
            <div className='sidebar-note-container'>
                <div id="edited-note-container">
                    <div id="editing-title-container">
                        <h4>EDITING : {titleToEdit}</h4>
                    </div>
                    <div id="editing-textarea-container">
                        <textarea
                            value = {textToEdit}
                            onChange = { (e) => updateTextToEdit(e) }
                            />
                    </div>
                    <div id="note-editing-buttons-container">
                        <button
                            onClick = {saveEditedText}
                            className = "btn btn-success"
                        >SAVE</button>
                        <button
                            onClick = {cancelEditing}
                            className = "btn btn-outline-danger"
                        >CANCEL</button>
                    </div>
                    
                </div>
            </div>
        )
    }



    function switchEditButton(titleToEdit, textToEdit){
        console.log("switchEditButton()", titleToEdit, textToEdit)
        setEditButtonPosition(true);
        setTitleToEdit(titleToEdit);
        setTextToEdit(textToEdit);
        displayNoteToEdit()
    }

    function updateTextToEdit(e){
        console.log("updateTextToEdit()", e.target.value)
        setTextToEdit(e.target.value);
        getText(e.target.value)
    }

    function saveEditedText(){
        console.log("saveEditedText()")
        localStorage.setItem(titleToEdit, textToEdit);
        alert("Note has been edited.")
        window.location.reload(false);
    }

    function cancelEditing(){
        setEditButtonPosition(false);
        getText('');
    }
    
    function handleRemove(title){
        localStorage.removeItem(title);
        console.log('handleRemove');
        alert("Your note has been removed.");
        window.location.reload(false);
    }

    return (
        <div id="sidebar-container">
        {/* <p>&lt;div id="sidebar-container"&gt;</p> */}
            <div id = "sidebar-title">
                {/* <p><p>&lt;div id="sidebar-title"&gt;</p></p> */}

                <div id="app-title-container">
                    <h3>BLOC-NOTE</h3>
                    <button onClick = { () => localStorage.clear() } >localStorage.clear()</button>
                </div>
                
                <div id="app-image-container">
                    <img
                        src = {notepadImage}
                        alt="notepad"
                        className='app-image'    
                    />
                </div>
                
            </div>
            


            { editButtonPosition ? displayNoteToEdit() : displayAllNotes() }
            
        </div>
    )
}

export default Sidebar;