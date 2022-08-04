import React , {useState} from 'react';
import '../styles/Sidebar.css'

function Sidebar({localStorageArray}){
    const [ editButtonPosition, setEditButtonPosition ] = useState(false);
    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');
    const [ titleToEdit, setTitleToEdit ] = useState('');
    const [ textToEdit, setTextToEdit ] = useState('');

    function displayAllNotes(){
        return(
            localStorageArray.map(note => (
                <div className='sidebar-note-container'>
                    <p>&lt;div className='sidebar-note-container'&gt;</p>

                    <h6 className='sidebar-note-title'>Note : {Object.keys(note)[0]}</h6>

                    <p className='sidebar-note-excerpt'>{Object.values(note)[0]}</p>

                    <button onClick = { () => { switchEditButton(Object.keys(note)[0], Object.values(note)[0]) }}>EDIT NOTE</button>
                    <button onClick={ () => handleRemove(Object.keys(note)[0]) }>SUPPR</button>
                </div>
                ))
        )
    }

    function switchEditButton(titleToEdit, textToEdit){
        console.log("switchEditButton()", titleToEdit, textToEdit)
        setEditButtonPosition(true);
        setTitleToEdit(titleToEdit);
        setTextToEdit(textToEdit);
        displayNoteToEdit()
    }

    function displayNoteToEdit(){
        console.log("displayNoteToEdit()", titleToEdit, textToEdit)
        return(
            <div className='sidebar-note-container'>
                <p>NOTE TO EDIT</p>
                <p>Title : {titleToEdit}</p>
                <textarea
                    value = {textToEdit}
                    onChange = { (e) => updateTextToEdit(e) }
                    />
                <button onClick = {saveEditedText} >OK</button>
            </div>
        )
    }

    function updateTextToEdit(e){
        console.log("updateTextToEdit()", e.target.value)
        setTextToEdit(e.target.value);
    }

    function saveEditedText(){
        console.log("saveEditedText()")
        localStorage.setItem(titleToEdit, textToEdit);
        alert("Note has been edited.")
        window.location.reload(false);
    }

    function handleRemove(title){
        localStorage.removeItem(title);
        console.log('handleRemove');
        alert("Your note is removed.");
        window.location.reload(false);
    }

    return (
        <div id="sidebar-container">
        <p>&lt;div id="sidebar-container"&gt;</p>
            <div id = "sidebar-title">
            <p>&lt;div id = "sidebar-title"&gt;</p>
                <button className='btn btn-primary'>Nouvelle note</button>
                <button onClick = { () => localStorage.clear() } >localStorage.clear()</button>
            </div>
            { 
                editButtonPosition ? displayNoteToEdit() : displayAllNotes()   
            }
            
        </div>
    )
}

export default Sidebar;