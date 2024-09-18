const router = require('express').Router();
let Courses = require('../models/courseModel.js');

router.route('/').get((req, res) => {
  Courses.find()
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const code = req.body.code;
  const credits = Number(req.body.credits);

  const newCourse = new Courses({
    name,
    code,
    credits,
  });

  newCourse.save()
    .then(() => res.json('Course added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Courses.findById(req.params.id)
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Courses.findByIdAndDelete(req.params.id)
    .then(() => res.json('Course deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Courses.findById(req.params.id)
    .then(course => {
      course.name = req.body.name;
      course.code = req.body.code;
      course.credits = req.body.credits;

      course.save()
        .then(() => res.json('Course updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;