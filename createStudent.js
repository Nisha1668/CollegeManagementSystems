import React, { useState } from 'react';
import axios from 'axios';

export default function CreateStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();

    const student = {
      name: name,
      email: email,
      major: major,
    }

    console.log(student);

    axios.post('http://localhost:5000/api/students/add', student)
      .then(res => console.log(res.data));

    setName('');
    setEmail('');
    setMajor('');
   
  }

  return (
    <div className='container'>
      <h3 className="mt-4 mb-4">Create New Student</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3"> 
          <label for="name">Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='Enter Name'
              />
        </div>
        <div className="form-group mb-3">
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
        <div className="form-group mb-3">
          <label for="mjor">Major: </label>
          <input 
              type="text" 
              required
              className="form-control"
              value={major}
              onChange={e => setMajor(e.target.value)}
              placeholder='Enter Major'
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Student" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}