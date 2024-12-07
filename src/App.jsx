import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Clock from './components/Clock';
import LapHistory from './components/LapHistory';


function App() {
  const [lap,setLap]=useState([]);
  
  return (
    <div>
      <Clock setLap={setLap}/>
      <LapHistory lap={lap}/>
    </div>
  )
}

export default App;
