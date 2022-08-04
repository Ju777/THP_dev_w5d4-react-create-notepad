import React , {useState} from 'react';
import { nanoid } from 'nanoid'
import '../styles/Sidebar.css'

function Sidebar({localStorageArray, getText, getNewNoteButtonPosition}){
    const [ editButtonPosition, setEditButtonPosition ] = useState(false);
    const [ titleToEdit, setTitleToEdit ] = useState('');
    const [ textToEdit, setTextToEdit ] = useState('');

    function displayAllNotes(){
        return(
            <div id="all-notes-container">
                <h4>Your notes :</h4>
                {
                    localStorageArray.map(note => (
                        <div key = {nanoid()} className='sidebar-note-container'>
                            {/* <p>&lt;div className='sidebar-note-container'&gt;</p> */}
                            <div id="sidebar-title-container">
                                <h6 key = {nanoid()} className='sidebar-note-title'>Title : {Object.keys(note)[0]}</h6>
                                <div id="editing-buttons-container">
                                    <button key = {nanoid()} onClick = { () => { switchEditButton(Object.keys(note)[0], Object.values(note)[0]) }}>EDIT NOTE</button>
                                    <button key = {nanoid()} onClick={ () => handleRemove(Object.keys(note)[0]) }>SUPPR</button>
                                </div>
                            </div>
                            <div id="sidebar-text-container">
                            <p key = {nanoid()} className='sidebar-note-excerpt'>{Object.values(note)[0]}</p>
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
                <p>EDITING : {titleToEdit}</p>
                <textarea
                    value = {textToEdit}
                    onChange = { (e) => updateTextToEdit(e) }
                    />

                <br/>
                <button onClick = {saveEditedText} >OK</button>
                <button onClick = {cancelEditing} >CANCEL</button>
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
                <h3>MON BLOC-NOTE</h3>
                {/* <button onClick = { () => localStorage.clear() } >localStorage.clear()</button> */}
            </div>
            


            { editButtonPosition ? displayNoteToEdit() : displayAllNotes() }
            
        </div>
    )
}

export default Sidebar;