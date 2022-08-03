import React , {useState, useEffect } from 'react';
import '../styles/NoteDisplay.css';
import Showdown from 'showdown';
const converter = new Showdown.Converter();

function NoteDisplay({input}){
    const [ content, setContent ] = useState(null);

    function createMarkup() {
        return {__html: converter.makeHtml(input)};
      }

    function consoleLog(){
        console.log(content)
    }

    return (
        <div id="notedisplay-container">
            <p>NoteDisplay</p>
            <p>{content}</p>
            <p dangerouslySetInnerHTML={createMarkup()}></p>
            <p><button onClick = { () => consoleLog(content)}>console.log</button></p>
        </div>
    )
}

export default NoteDisplay;