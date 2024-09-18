import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditCourse() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [credits, setCredits] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/courses/${id}`)
      .then(response => {
        setName(response.data.name);
        setCode(response.data.code);
        setCredits(response.data.credits);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const course = {
      name: name,
      code: code,
      credits: Number(credits)
    }

    axios.post(`http://localhost:5000/api/courses/update/${id}`, course)
      .then(res => {
        console.log(res.data);
        navigate('/courses');
      })
      .catch(err => console.log('Error: ' + err));
  }

  return (
    <div className="container">
      <h3 className="mt-4 mb-4">Edit Course</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Course Name: </label>
          <input 
            type="text"
            required
            className="form-control"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="code">Course Code: </label>
          <input 
            type="text"
            required
            className="form-control"
            id="code"
            value={code}
            onChange={e => setCode(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="credits">Credits: </label>
          <input 
            type="number"
            required
            className="form-control"
            id="credits"
            value={credits}
            onChange={e => setCredits(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Course" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}