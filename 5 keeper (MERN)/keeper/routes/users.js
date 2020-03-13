const express = require('express');
const router = express.Router();
const { register, getUser } = require('../controllers/users');


router.route('/').post(register).get(getUser);


module.exports = router;