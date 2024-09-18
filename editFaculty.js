import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditFaculty() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/faculty/${id}`)
      .then(response => {
        setName(response.data.name);
        setEmail(response.data.email);
        setDepartment(response.data.department);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const faculty = {
      name: name,
      email: email,
      department: department
    }

    axios.post(`http://localhost:5000/api/faculty/update/${id}`, faculty)
      .then(res => {
        console.log(res.data);
        navigate('/faculty');
      })
      .catch(err => console.log('Error: ' + err));
  }

  return (
    <div className="container">
      <h3 className="mt-4 mb-4">Edit Faculty</h3>
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
          <label htmlFor="department">Department: </label>
          <input 
            type="text"
            required
            className="form-control"
            id="department"
            value={department}
            onChange={e => setDepartment(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Faculty" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}