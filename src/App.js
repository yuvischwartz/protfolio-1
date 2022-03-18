import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import About from './About';
import './App.css';
import Blog from './Blog';
import Contact from './Contact';
import Navbar from './Components/Navbar';
import Topbar from './Components/Topbar';
import Visit from './Visit';
import Gift from './Gift';
import Home from './Home';
import Shop from './Shop';
import WorkShops from './WorkShops';

function App() {
  return (<>
    <div className="App relative bg-stone-50 h-screen">
      <Topbar/ >
      <Navbar />
      {/* <Button buttonText={'SHOP ALL'} buttonSize={'text-sm'}/> */}
      {/* <div className={'solidb'}>

      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Gift" element={<Gift />} />
        <Route path="/Workshops" element={<WorkShops/>}/>
        <Route path="/Visit" element={<Visit />} />
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      
    </div>
    </>
  );
}

export default App;
