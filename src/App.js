import React from 'react';
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Student from './Student.js'
import ContactUs from './ContactUs.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Edit from './Edit.js';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/student' element={<Student />} />
          <Route path='/edit' element={<Edit/>} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      </Router>
      
    </>
    

  );
  
}

export default App;
