import React, { useContext } from 'react';
import InputNoteContext from './InputNoteContext';
import Shodown from 'showdown';
import '../styles/NotePreview.css';
const converter = new Shodown.Converter();

const NotePreview = () => {

    const { inputTitle, inputText } = useContext(InputNoteContext);

    function createMarkupTitle() {
      return {__html: converter.makeHtml(inputTitle)};
    }

    function createMarkupText() {
       return {__html: converter.makeHtml(inputText)};
    }

    return(
        <div id = "preview-container">
            {/* <h3>NotePreview</h3> */}
            <p>Title : <span dangerouslySetInnerHTML={createMarkupTitle()} ></span></p>
            <p>Text : <span dangerouslySetInnerHTML={createMarkupText()} ></span></p>
        </div>
    )
}

export default NotePreview;