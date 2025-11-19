import React, { useState, useEffect } from 'react';
import Allnotes from './Allnotes.js'
import Addnote from './Addnote.js';
import { useNavigate } from "react-router-dom";

function Home() {
  const [msg, setMsg] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [type, settype] = useState('success');
  const alert = (msg,msg2) => {
    setMsg(msg);
    setShowAlert(true);
    settype(msg2);
  }
  let navigate =  useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('token')){
      
      navigate('/login');
    }
    if (showAlert) {
      const timeout = setTimeout(() => setShowAlert(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [showAlert]);
  return (
    <>
      <div className={`alert alert-${type} alert-dismissible fade ${showAlert ? 'show' : ''} float-alert`} role="alert">
        {msg}
        <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowAlert(false)}></button>
      </div>
      <Addnote alert={alert}/>
      <Allnotes alert={alert} />
    </>
  )
}

export default Home;
