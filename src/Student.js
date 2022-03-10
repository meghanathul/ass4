import React from 'react'
// import * as React from 'react';
import {Link} from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// const studentInfo=[
  
//     {Id:1,name: "John",age: 26,course : "MERN",batch : "October"},
//   { Id:2,name: "Doe",age: 25,course : "MERN",batch : "November" }, 
//   {Id:3,name: "Biden",age: 26,course : "MERN",batch : "September" },
//   {Id:4,name: "Barar",age: 22,course : "MERN",batch : "September"},
//    {Id:5,name: "Christ",age: 22,course : "MERN",batch : "Octomber"}
// ];

 const Student = (props)=>{
   const {studentData}=props;
  return (
      <>
             <h1 style={{fontSize:40,padding:30}}>Student Details</h1>
       <button id='change-btn'><Link to='/addstudent' className='addlink' href="#">Add new student</Link></button>
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell ><b>Name</b></TableCell>
            <TableCell align="right"><b>Age</b></TableCell>
            <TableCell align="right"><b>Course</b></TableCell>
            <TableCell align="right"><b>Batch</b></TableCell>
            <TableCell align="right"><b>Change</b></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {studentData.map((e) => (
            <TableRow
            key={e.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="e">{e.name}</TableCell>
              <TableCell align="right">{e.age}</TableCell>
              <TableCell align="right">{e.course}</TableCell>
              <TableCell align="right">{e.batch}</TableCell>
              <TableCell align='right'><Link to={`/addstudent/${e.Id}`}>Edit</Link></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </>
  );
          }
export default Student

