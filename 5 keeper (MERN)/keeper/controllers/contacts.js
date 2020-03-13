const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const Contact = require('../models/Contact');
const User = require('../models/User');


// @desc Get All Contacts
// @route GET /api/contacts
// @access Private
exports.getContacts = asyncHandler(
  async (req,res) => {
    const contacts = await Contact.find({ user: req.user.id });

    return res.status(200).json({ success: true, data: contacts });
  }
);

// @desc Add Contact
// @route POST /api/contacts
// @access Private
exports.addContact = asyncHandler(
  async (req,res) => {
    req.body.user = req.user.id;
    const contact = await Contact.create(req.body);

    return res.status(200).json({ success: true, data: contact });

  }
);

// @desc Update Contact
// @route PUT /api/contacts/:id
// @access Private
exports.updateContact = asyncHandler(
  async (req,res) => {

    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.status(200).json({ success: true, msg: 'Contact Updated', data: contact });
  }
);


// @desc Delete Contact
// @route DELETE /api/contacts/:id
// @access Private
exports.deleteContact = asyncHandler(
  async (req,res) => {

    await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true, msg: 'Contact Deleted' });
  }
);

