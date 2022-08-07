import React, { useState, useContext, useEffect } from 'react';
import EditNoteContext from './EditNoteContext';
import InputNoteContext from './InputNoteContext';

import '../styles/MarkdownInput.css'

const MarkdownInput = () => {

    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');
    const { updateInputTitle, updateInputText} = useContext(InputNoteContext);
    const { titleToEdit, updateTitleToEdit, textToEdit, updateTextToEdit } = useContext(EditNoteContext);

    useEffect( () => {
        titleToEdit ? setTitle(titleToEdit) : setTitle('');
        textToEdit ? setText(textToEdit) : setText('');
    }, [titleToEdit, textToEdit])

    const handleChangeTitle = (e) => {
        // console.log(e.target.value);
        setTitle(e.target.value);
        updateInputTitle(e.currentTarget.value);
        
    }

    const handleChangeText = (e) => {
        // console.log(e.target.value);
        setText(e.target.value);
        updateInputText(e.currentTarget.value);
    }

    const handleSave = (title, text) => {
        var currentNotes = JSON.parse(localStorage["NOTEPAD"]);
        var updatingNotes = {...currentNotes, [title] : text };
        localStorage.setItem("NOTEPAD", JSON.stringify(updatingNotes));
        setTitle('');
        setText('');
        // console.log(localStorage);
        window.location.reload(false);
    }


    return(
        <div id = "input-container">
            <h3>Add a note (HTML/ Markdown supported)</h3><p><button onClick = { () => handleSave(title, text) }>SAVE</button></p>

            <div id="input-title-container">
                <input
                    type = "text"
                    onChange = { (e) => handleChangeTitle(e) }
                    value = {title}
                    placeholder = "What title ?"
                    className='my-2'
                    />
            </div>

            <div id="input-text-container">
                <textarea
                    value = {text}
                    onChange = { (e) => handleChangeText(e) }
                    placeholder  = "What text ?"
                    rows = "4"
                    cols = "91">
                </textarea>
               
            </div>

            
            {/* <p><button onClick = { () => localStorage.clear() }>localStorage.clear</button></p> */}
        </div>
    )
}

export default MarkdownInput;