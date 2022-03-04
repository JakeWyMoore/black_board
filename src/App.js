import React, { useEffect, useState } from "react";

import './App.css';

import Boxes from './components/Boxes';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateTaskPopup from './components/CreateTaskPopup';
import TestForm from './components/TestForm';

function App() {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }


  return (
    
    <div className='container'>

      <Header />

      <Boxes message={ currentMsg } />

      <CreateTaskPopup onNewMessage={ youveGotMail } trigger={buttonPopup} setTrigger={setButtonPopup} />

      <Footer setTrigger={setButtonPopup}/>

    </div>
  );
}

export default App;
