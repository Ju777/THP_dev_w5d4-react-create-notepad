import React , {useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import NoteDisplay from './components/NoteDisplay';
import MarkdownInput from './components/MarkdownInput';
// import RightSide from './components/RightSide';
import './styles/App.css'

function App() {
  const [ localStorageArray, setLocalStorageArray ] = useState([]);
  const [ title, setTitle ] = useState(null);
  const [ text, setText ] = useState(null);

  function getText(text){
      setText(text);
  }

  // function getFromEdit(title, text){
  //   console.log("On vient de sidebar !", title, text)
  //   setTitle(title);
  //   setText(text);
  // }

  useEffect( () => {
    console.clear();
    const storageKeys = Object.keys(localStorage);
    const storageValues = Object.values(localStorage);
    const finalArray = [];
    for(let i = 0 ; i < localStorage.length ; i++){
      finalArray[i] = { [storageKeys[i]]: storageValues[i] }
    }
    console.log(storageKeys, storageValues, finalArray);
    setLocalStorageArray(finalArray);
  },[])

  return (
   <div id="main-container">
    <Sidebar
      localStorageArray = {localStorageArray}
      // getFromEdit = {getFromEdit}
      />
    <NoteDisplay text = {text}/>
    <MarkdownInput
        getText = {getText}
        // titleFromEdit = {title}
        // textFromEdit = {text}
    />
   </div>
    
  )
}

export default App;
