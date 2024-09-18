import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateCourse() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [credits, setCredits] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const course = {
      name: name,
      code: code,
      credits: Number(credits)
    }
console.log(course);
    axios.post('http://localhost:5000/api/courses/add', course)
      .then(res => {
        console.log(res.data);
        navigate('/courses');
      })
      .catch(err => console.log('Error: ' + err));

    setName('');
    setCode('');
    setCredits('');
  }

  return (
    <div className="container">
      <h3 className="mt-4 mb-4">Create New Course</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Course Name:</label>
          <input
            type="text"
            required
            className="form-control"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter course name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="code">Course Code:</label>
          <input
            type="text"
            required
            className="form-control"
            id="code"
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="Enter course code"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="credits">Credits:</label>
          <input
            type="number"
            required
            className="form-control"
            id="credits"
            value={credits}
            onChange={e => setCredits(e.target.value)}
            placeholder="Enter number of credits"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Course" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}