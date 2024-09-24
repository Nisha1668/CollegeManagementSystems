import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/students/${id}`)
      .then(response => {
        setName(response.data.name);
        setEmail(response.data.email);
        setMajor(response.data.major);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const student = {
      name: name,
      email: email,
      major: major
    }

    console.log(student);

    axios.post(`http://localhost:5000/api/students/update/${id}`, student)
      .then(res => {
        console.log(res.data);
        navigate('/');
      })
      .catch(err => console.log('Error: ' + err));
  }

  return (
    <div className="container">
      <h3 className="mt-4 mb-4">Edit Student</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name: </label>
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
          <label htmlFor="email">Email: </label>
          <input 
            type="email"
            required
            className="form-control"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="major">Major: </label>
          <input 
            type="text"
            required
            className="form-control"
            id="major"
            value={major}
            onChange={e => setMajor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Student" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}