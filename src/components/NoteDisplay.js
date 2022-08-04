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
            <div id="note-preview-container">
                <h3>Note preview</h3>
                <div id="note-preview">
                    <p dangerouslySetInnerHTML={createMarkup()}></p>
                </div>
            </div>
        </div>
    )
}

export default NoteDisplay;