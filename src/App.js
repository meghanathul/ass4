import React from 'react';
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Student from './Student.js'
import ContactUs from './ContactUs.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Edit} from './Edit.js';
import Addstudent from './AddStudent';

class App extends React.Component {
  
  state = {
    studentInfo: [
        
        { name: "John", age: 26, course: "MERN", batch: "October", Id: 1},
        { name: "Doe", age: 25, course: "MERN", batch: "November", Id: 2 },
        { name: "Biden", age: 26, course: "MERN", batch: "September", Id: 3 },
        { name: "Barar", age: 22, course: "MERN", batch: "September", Id: 4 },
        { name: "Christ", age: 22, course: "MERN", batch: "Octomber", Id: 5 }
    ]
        

}
studentAdd(sampleObj){
    this.setState({
     studentInfo : [...this.state.studentInfo, sampleObj]
    })
    
  }
  updateStudentData=(id,demo)=>{
    console.log(demo);
    this.state.studentInfo.forEach((e) => {
      if(e.Id === id){
        this.state.studentInfo.splice(id-1, 1, demo)
      }

    });
  
  }
 render(){
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/student' element={<Student studentData = {this.state.studentInfo} />} />
          <Route path='/edit' element={<Edit studentData = {this.state.studentInfo} func = {this.updateStudentData.bind(this)}/>} />
          <Route path='/addstudent'element={<Addstudent addingData = {this.studentAdd.bind(this)} data = {this.state.studentInfo}/>}/>
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      </Router>
      
    </>
    

  );
 }
  
  } 



export default App;
