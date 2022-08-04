import React , {useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';

import RightSide from './components/RightSide';
import './styles/App.css'

function App() {
  const [ localStorageArray, setLocalStorageArray ] = useState([]);

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
    <Sidebar localStorageArray = {localStorageArray}/>
    <RightSide />
   </div>
    
  )
}

export default App;
