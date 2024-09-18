import React, { useState } from 'react';
import axios from 'axios';

export default function CreateFaculty() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const faculty = {
      name: name,
      email: email,
      department: department,
    }

    console.log(faculty);

    axios.post('http://localhost:5000/api/faculty/add', faculty)
      .then(res => console.log(res.data));

    setName('');
    setEmail('');
    setDepartment('');
  }

  return (
    <div>
      <h3>Create New Faculty</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label for="name">Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='Enter Name'
              />
        </div>
        <div className="form-group">
          <label for="email">Email: </label>
          <input 
              type="text" 
              required
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter Email'
              />
        </div>
        <div className="form-group">
          <label for="department">Department: </label>
          <input 
              type="text" 
              required
              className="form-control"
              value={department}
              onChange={e => setDepartment(e.target.value)}
              placeholder='Enter Department'
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Faculty" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}