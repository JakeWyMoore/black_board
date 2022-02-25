import React, { useEffect, useState } from "react";

import './App.css';

import Boxes from './components/Boxes';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import CreateTaskPopup from './components/CreateTaskPopup';

function App() {

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    
    <div className='container'>

      <Header />

      <div className='box-container'>
        <Boxes title={'Title'} />
      </div>

      {/* <TaskForm /> */}

      <Footer setTrigger={setButtonPopup}/>

      <CreateTaskPopup trigger={buttonPopup} setTrigger={setButtonPopup} />

    </div>
  );
}

export default App;
