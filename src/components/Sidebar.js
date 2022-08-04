import React , {useState} from 'react';
import '../styles/Sidebar.css'

function Sidebar({localStorageArray, getText, getNewNoteButtonPosition}){
    const [ editButtonPosition, setEditButtonPosition ] = useState(false);
    const [ titleToEdit, setTitleToEdit ] = useState('');
    const [ textToEdit, setTextToEdit ] = useState('');
    const [ newNoteButtonPosition, setNewNoteButtonPosition ] = useState(false);

    function displayAllNotes(){
        return(
            localStorageArray.map(note => (
                <div className='sidebar-note-container'>
                    {/* <p>&lt;div className='sidebar-note-container'&gt;</p> */}
                    

                    <h6 className='sidebar-note-title'>Note : {Object.keys(note)[0]}</h6>

                    <p className='sidebar-note-excerpt'>{Object.values(note)[0]}</p>

                    <button onClick = { () => { switchEditButton(Object.keys(note)[0], Object.values(note)[0]) }}>EDIT NOTE</button>
                    <button onClick={ () => handleRemove(Object.keys(note)[0]) }>SUPPR</button>
                </div>
                ))
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

    function switchNewNoteButton(){
        setNewNoteButtonPosition(!newNoteButtonPosition);
        // console.log("switchNewNoteButton()", newNoteButtonPosition);
        getNewNoteButtonPosition(newNoteButtonPosition)
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
                <h3>
                    MON BLOC-NOTE
                    <button
                        className='btn btn-primary'
                        onClick ={switchNewNoteButton}>Nouvelle note
                    </button>
                </h3>
                {/* <button onClick = { () => localStorage.clear() } >localStorage.clear()</button> */}
            </div>
            
            <br/><br/><br/>
            <h4>Your notes :</h4>
            { editButtonPosition ? displayNoteToEdit() : displayAllNotes() }
            
        </div>
    )
}

export default Sidebar;