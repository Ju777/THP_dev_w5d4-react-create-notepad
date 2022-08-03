import React , {useState} from 'react';
import '../styles/NoteDisplay.css';

function NoteDisplay({input}){
    return (
        <div id="notedisplay-container">
            <p>NoteDisplay</p>
            <p>{input}</p>
        </div>
    )
}

export default NoteDisplay;