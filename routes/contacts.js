const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route   POST api/contacts
// @desc    add new contacts
// @access  private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route   PUT api/contacts/:id
// @desc    Update Contact
// @access  private
router.put('/:id', (req, res) => {
  res.send('Update Contact');
});

// @route   DELETE api/contacts/:id
// @desc    Get all users contacts
// @access  private
router.post('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
