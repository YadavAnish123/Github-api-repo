 import './App.css';
 import React from 'react'
import Navebar from './components/Navebar';
// import Repo from './components/Repo';
import  DataState from './context/DataState'
// import dataContext from './context/dataContext'

function App() {
  // const context=useContext(dataContext)
  // const {username}=context
  return (
    <DataState> 
     <Navebar/>
     {/* {username&&<Repo/>} */}
    </DataState> 
      
  );
}

export default App;
