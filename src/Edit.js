import React from 'react'
import './Edit.css'
const Edit = () => {

  return (
    <div>
      <form>
        <input type='text' id='name' name='name' required='required' />
        <span>name</span>
        <br />

        <input type='number' id='age' name='age'  />
        <span id='age-span'>age</span>
        <br />
        <input type='text' id='course' name='course' />
        <span id='course-span'>course</span>
        <br />
        <input type='text' id='batch' name='batch' />
        <span id='batch-span'>batch</span>
        <br />
      </form>
      <button className='btn'>Cancle</button>
      <button className='btn'>Update</button>
    </div>
    
  )
  
}

export default Edit