import React, { useEffect, useState } from "react";

import './App.css';

import Boxes from './components/Boxes';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateTaskPopup from './components/CreateTaskPopup';
import TestForm from './components/TestForm';

function App() {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [task, setTask] = useState("task")

  const newTask = (submittedTask) => {
    setTask(submittedTask);
  }

  return (
    
    <div className='container'>

      <Header />

      <div className='box-container'>
        <Boxes task={ newTask } />
      </div>

      <Footer setTrigger={setButtonPopup}/>

      <CreateTaskPopup trigger={buttonPopup} setTrigger={setButtonPopup} message={ newTask }/>

    </div>
  );
}

export default App;
