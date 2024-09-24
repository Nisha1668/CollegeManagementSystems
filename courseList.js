import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Course = props => (
  <tr>
    <td>{props.course.name}</td>
    <td>{props.course.code}</td>
    <td>{props.course.credits}</td>
    <td>
      <button className='btn btn-edit'>
      <Link to={"/courses/edit/"+props.course._id} className="btn btn-primary mr-2">Edit</Link>
      </button>
      
      <button className="btn btn-danger" onClick={() => { props.deleteCourse(props.course._id) }}>Delete</button>
    </td>
  </tr>
)

export default function CoursesList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses/')
      .then(response => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const deleteCourse = (id) => {
    axios.delete('http://localhost:5000/api/courses/'+id)
      .then(response => { console.log(response.data)});

    setCourses(courses.filter(el => el._id !== id));
  }

  const courseList = () => {
    return courses.map(currentcourse => {
      return <Course course={currentcourse} deleteCourse={deleteCourse} key={currentcourse._id}/>;
    })
  }

  return (
    <div>
      <h3>Courses</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Credits</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { courseList() }
        </tbody>
      </table>
    </div>
  )
}