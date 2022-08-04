import React , {useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import NoteDisplay from './components/NoteDisplay';
import MarkdownInput from './components/MarkdownInput';
import './styles/App.css'

function App() {
  const [ localStorageArray, setLocalStorageArray ] = useState([]);
  const [ text, setText ] = useState(null);

  // Dans le useEffect : on récupère en un coup tout le contenu de localStorage existant.
  // Ce contenu est placé dans un tableau dont chaque élément est une note sous forme d'objet.
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

  function getText(text){
    setText(text);
  }


  return (
   <div id="main-container">
      <Sidebar
        localStorageArray = {localStorageArray}
        getText = {getText}
        />
      <NoteDisplay text = {text}/>
      <MarkdownInput
        getText = {getText}
      />
   </div>
    
  )
}

export default App;
