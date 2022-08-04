import React , {useState, useEffect } from 'react';
import '../styles/NoteDisplay.css';
import Showdown from 'showdown';
const converter = new Showdown.Converter();

function NoteDisplay({text}){

    function createMarkup() {
        return {__html: converter.makeHtml(text)};
    }

    return (
        <div id="notedisplay-container">
            <p>NoteDisplay</p>
            <p dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
    )
}

export default NoteDisplay;