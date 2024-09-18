const router = require('express').Router();
let Faculty = require('../models/facultyModel.js');

router.route('/').get((req, res) => {
  Faculty.find()
    .then(faculty => res.json(faculty))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const department = req.body.department;

  const newFaculty = new Faculty({
    name,
    email,
    department,
  });

  newFaculty.save()
    .then(() => res.json('Faculty added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Faculty.findById(req.params.id)
    .then(faculty => res.json(faculty))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Faculty.findByIdAndDelete(req.params.id)
    .then(() => res.json('Faculty deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Faculty.findById(req.params.id)
    .then(faculty => {
      faculty.name = req.body.name;
      faculty.email = req.body.email;
      faculty.department = req.body.department;

      faculty.save()
        .then(() => res.json('Faculty updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;