import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">College Management</Link>
      <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/" className="nav-link">Students</Link>
        </li>
        <li className="navbar-item">
        <Link to="/courses" className="nav-link">Courses</Link>
        </li>
        <li className="navbar-item">
        <Link to="/faculty" className="nav-link">Faculty</Link>
        </li>
        <li className="navbar-item">
        <Link to="/create" className="nav-link">Create Student</Link>
        </li>
        <li className="navbar-item">
        <Link to="/creates" className="nav-link">Create Faculty</Link>
        <li className="navbar-item">
        <Link to="/courses/create" className="nav-link">Create Course</Link>
        </li>
        </li>
      </ul>
      </div>
    </nav>
  );
}