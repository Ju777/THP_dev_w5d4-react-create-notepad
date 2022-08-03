import React , {useState} from 'react';
import Sidebar from './components/Sidebar';
import NoteDisplay from './components/NoteDisplay';
import MarkdownInput from './components/MarkdownInput';
import './styles/App.css'

function App() {
  const [ input, setInput ] = useState(null)
  
  function handleChange(e){
    setInput(e.target.value);
    console.log(input);
  }

  return (
   <div id="main-container">
    <Sidebar />
    <div id="note-part-container">
      <NoteDisplay input = {input}/>
      <MarkdownInput handleChange = { (e) => handleChange(e)}/>
      </div>
   </div>
    
  )
}

export default App;
