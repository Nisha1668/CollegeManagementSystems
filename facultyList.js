import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Faculty = props => (
  <tr>
    <td>{props.faculty.name}</td>
    <td>{props.faculty.email}</td>
    <td>{props.faculty.department}</td>
    <td>
      <button className='btn btn-edit'>
      <Link to={"/faculty/edit/"+props.faculty._id} className="btn btn-primary mr-2">Edit</Link>
      </button>
      <button className="btn btn-danger" onClick={() => { props.deleteFaculty(props.faculty._id) }}>Delete</button>
    </td>
  </tr>
)

export default function FacultyList() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/faculty/')
      .then(response => {
        setFaculty(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const deleteFaculty = (id) => {
    axios.delete('http://localhost:5000/api/faculty/'+id)
      .then(response => { console.log(response.data)});

    setFaculty(faculty.filter(el => el._id !== id));
  }

  const facultyList = () => {
    return faculty.map(currentfaculty => {
      return <Faculty faculty={currentfaculty} deleteFaculty={deleteFaculty} key={currentfaculty._id}/>;
    })
  }

  return (
    <div>
      <h3>Faculty</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { facultyList() }
        </tbody>
      </table>
    </div>
  )
}