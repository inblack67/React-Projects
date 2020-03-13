const express = require('express');
const router = express.Router();
const { login, getMe } = require('../controllers/auth');
const { protect } = require('../middlewares/auth');

router.post('/', login);
router.get('/', protect, getMe)


module.exports = router;