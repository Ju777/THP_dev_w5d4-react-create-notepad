import React, { useState, useEffect, useContext } from 'react'
import EditNoteContext from './EditNoteContext';
import {nanoid} from 'nanoid';
import '../styles/NotesContainer.css'

const NotesContainer = () => {

    const [ currentNotes, setCurrentNotes ] = useState(localStorage["NOTEPAD"] ? JSON.parse(localStorage["NOTEPAD"]) : 0);
    const [ arrayOfNotes, setArrayOfNotes ] = useState([]);

    useEffect( () => {
         if (!localStorage["NOTEPAD"]) {
            localStorage.setItem("NOTEPAD", JSON.stringify({'Your first note':'Edit me !'}));
            setCurrentNotes(JSON.parse(localStorage["NOTEPAD"]));
         }
       
        const titles = Object.keys(currentNotes);
        const texts = Object.values(currentNotes);
        const finalArray = [];

        for (let i = 0 ; i < titles.length ; i++){
            finalArray[i] = {
                [titles[i]]: texts[i]
            }
        }
        // console.log('finalArray', finalArray);
        setArrayOfNotes(finalArray)
    }, [currentNotes]);

    const { updateTitleToEdit, updateTextToEdit } = useContext(EditNoteContext);


    const handleEdit = (e, note) => {
        // console.log('handleEdit', e, note);
        updateTitleToEdit(Object.keys(note));
        updateTextToEdit(Object.values(note));
    }

    const handleRemove = (note) => {
        if (window.confirm("Are you sure ?"))  {
            // console.log(currentNotes);
            delete currentNotes[Object.keys(note)];
            // console.log(currentNotes);
            localStorage.setItem('NOTEPAD', JSON.stringify(currentNotes))
            window.location.reload(false);
        }      
    }

    return(
        <div id = "sidebar-container">
            <h3 id="main-title">MY REACT NOTEPAD</h3>
            <div id = "notes-container">
                {
                    arrayOfNotes.map(note =>(
                        <div key = {nanoid()}
                            className="single-note-container"
                            onClick = { (e) => handleEdit(e, note) }>
                            <div key = {nanoid()} className = "single-note-title-area">
                                <p><strong>{Object.keys(note)}</strong></p>
                                <div id = "remove-button-container"><button onClick = { () => handleRemove(note)}>Remove</button></div> 
                            </div>
                            <div key = {nanoid()}
                                className = "single-note-text-container">
                                <p>{Object.values(note)}</p>
                            </div>                  
                        </div>
                    ))
                }
            </div>            
        </div>
    )
}

export default NotesContainer;