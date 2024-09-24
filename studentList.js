import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Student = props => (
  <tr>
    <td>
    {props.student.name}
      </td>
    <td>
    {props.student.email}</td>
    <td>
    {props.student.major}</td>
    
    <td>
      
      <button className="btn btn-edit" >
      <Link to={"/edit/"+props.student._id} className="btn btn-primary mr-2">Edit</Link>
      </button>
      
      <button className="btn btn-danger" onClick={() => { props.deleteStudent(props.student._id) }}>Delete</button>
    </td>
  </tr>
)

export default function StudentsList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/students/')
      .then(response => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const deleteStudent = (id) => {
    axios.delete('http://localhost:5000/api/students/'+id)
      .then(response => { console.log(response.data)});

    setStudents(students.filter(el => el._id !== id));
  }
  
  const studentList = () => {
    return students.map(currentstudent => {
      return <Student student={currentstudent} deleteStudent={deleteStudent} key={currentstudent._id}/>;
    })
  }

  return (
    <div>
      <h3>Students</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Major</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { studentList() }
        </tbody>
      </table>
    </div>
  )
}