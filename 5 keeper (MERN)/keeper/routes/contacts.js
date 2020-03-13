const express = require('express');
const router = express.Router();
const { getContacts, updateContact, addContact, deleteContact } = require('../controllers/contacts');
const { protect } = require('../middlewares/auth');


router.post('/', protect, addContact).get('/', protect, getContacts);

router.put('/:id', updateContact).delete('/:id', deleteContact);




module.exports = router;