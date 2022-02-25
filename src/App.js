import React, { useEffect, useState } from "react";

import './App.css';

import Boxes from './components/Boxes';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateTaskPopup from './components/CreateTaskPopup';
import TestForm from './components/TestForm';

function App() {

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    
    <div className='container'>

      <Header />

      <div className='box-container'>
        <Boxes title={'Title'} />
      </div>

      <Footer setTrigger={setButtonPopup}/>

      <CreateTaskPopup trigger={buttonPopup} setTrigger={setButtonPopup} />

    </div>
  );
}

export default App;
