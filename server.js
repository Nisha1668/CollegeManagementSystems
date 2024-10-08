const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const studentsRouter = require('./routes/students');
const coursesRouter = require('./routes/courses');
const facultyRouter = require('./routes/faculty');

app.use('/api/students', studentsRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/faculty', facultyRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});