import React ,{ useEffect, useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import './Edit.css'

export const Edit = (props) => {

  const[name,setName]=useState('')
  const[age,setAge]=useState('')
  const[course,setCourse]=useState('')
  const[batch,setBatch]=useState('')
  const {Id}= useParams();


  const {studentData} = props;

   useEffect(() => {
       const student =  studentData.filter(e => e.Id === Id);
       console.log(student);
       setName(student[0].name);
       setAge(student[0].age);
       setCourse(student[0].course);
       setBatch(student[0].batch)
       
    })

   const updateStudentData = () => {
      const sampleObj  = {
        name : name,
        age: age,
        course : course,
        batch : batch,
        Id : Id
      }
      
     props.func(Id,sampleObj )

   }
   
 

  
  return (
    <div>
      <form>
        <input type='text' id='name' name='name' onChange={(e) => {setName(e.target.value)}}required='required' value={name} />
        <span>name</span>
        <br />

        <input type='number' id='age' name='age' onChange={(e) =>{setAge(e.target.value)}} value={age}/>
        <span id='age-span'>age</span>
        <br />
        <input type='text' id='course' name='course' onChange={(e) => {setCourse(e.target.value)}} value={course}/>
        <span id='course-span'>course</span>
        <br />
        <input type='text' id='batch' name='batch'onChange={ (e) => {setBatch(e.target.value)}} value={batch}/>
        <span id='batch-span'>batch</span>
        <br />
      </form>
      <Link to='/student'><button className='btn'>Cancle</button></Link>
      <Link to='/student'><button className='btn' onClick={updateStudentData}>Update</button></Link>
    </div>
  )
  }
