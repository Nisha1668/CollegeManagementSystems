import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.js"
import StudentsList from "./components/studentList.js";
import EditStudent from "./components/editStudent.js";
import EditFaculty from "./components/editFaculty.js";
import EditCourse from "./components/editCourse.js";
import CreateStudent from "./components/createStudent.js";
import CreateFaculty from "./components/createFaculty.js";
import CreateCourse from "./components/createCourse.js";
import CoursesList from "./components/courseList.js";
import FacultyList from "./components/facultyList.js";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" element={<StudentsList />} />
          <Route path="/edit/:id" element={<EditStudent />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/creates" element={<CreateFaculty />} />
          <Route path="/courses/create" element={<CreateCourse />} />
          <Route path="/courses/edit/:id" element={<EditCourse />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/faculty" element={<FacultyList />} />
          <Route path="/faculty/edit/:id" element={<EditFaculty />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;