import React from 'react'
import { Link } from 'react-router-dom';


class AddStudent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          name : "",
          age: "",
          course  : "",
          batch : ""
      
        }
        
    
      }
      
      onSubmit (){
        
        const sampleObj = {
          name : this.state.name,
          age : this.state.age,
          course : this.state.course,
          batch : this.state.batch,
          Id : this.props.studentData.length + 1
        }
        console.log(sampleObj);
        this.props.addingData(sampleObj);
       
    
        this.setState({
          name : "",
        age: "",
        course  : "",
        batch : ""
        })
      }
    render() {
        return (
            <div>
                <form >

                    <input type="text" id="name" required name='name' onChange={(event) => {this.setState({name : event.target.value})}} />
                    <span>Name</span>

                    <input type="number" required id="age" name='age' onChange={(event) => {this.setState({age : event.target.value})}} />
                    <span id='age-span'>Age</span>

                    <input type="text" id="course" required name='course'  onChange={(event) => {this.setState({course : event.target.value})}} />
                    <span id='course-span'>course</span>

                    <input type="text" id="batch" required name='batch' onChange={(event) => {this.setState({batch: event.target.value})}} />
                    <span id='batch-span'>Batch</span>
                </form>

                <Link to="/student"><button className='btn btn-outline-secondary' >Back</button></Link>
                <Link to="/student"><button className='btn btn-success ' id='bt1' onClick={this.onSubmit.bind(this)}  >Add</button></Link>

            </div>
        )
    }
}

export default AddStudent



