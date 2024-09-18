const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const facultySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
}, {
  timestamps: true,
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;