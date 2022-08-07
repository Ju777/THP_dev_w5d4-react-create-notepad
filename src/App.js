import logo from './logo.svg';
import './App.css';
import NotesContainer from './components/NotesContainer';
import MarkdownInput from './components/MarkdownInput';
import NotePreview from './components/NotePreview';
import InputNoteContext from './components/InputNoteContext';
import EditNoteContext from './components/EditNoteContext';
import { useState } from 'react';

function App() {

  const [ title, setTitle ] = useState(null);
  const [ text, setText ] = useState(null);
  const [ editTitle, setEditTitle ] = useState(null);
  const [ editText, setEditText ] = useState(null);

  const inputNoteContextValue = {
    inputTitle : title,
    updateInputTitle : setTitle,
    inputText : text,
    updateInputText : setText
  }

  const editNoteContextValue = {
    titleToEdit: editTitle,
    updateTitleToEdit : setEditTitle,
    textToEdit : editText,
    updateTextToEdit : setEditText

  }

  return (
    <InputNoteContext.Provider value = {inputNoteContextValue}>
      <EditNoteContext.Provider value = {editNoteContextValue}>
        <div className="main-container">

          <NotesContainer/>
          <MarkdownInput/>
          <NotePreview/>

        </div>
      </EditNoteContext.Provider>
    </InputNoteContext.Provider>
  );
}

export default App;
