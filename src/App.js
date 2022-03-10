import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Button from './Components/Button';
import Navbar from './Components/Navbar';
import Topbar from './Components/Topbar';
import Home from './Home';

function App() {
  return (
    <div className="App relative bg-stone-50 h-screen">
      <Topbar/ >
      <Navbar />
      {/* <Button buttonText={'SHOP ALL'} buttonSize={'text-sm'}/> */}
      
      <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
      
    </div>
  );
}

export default App;
