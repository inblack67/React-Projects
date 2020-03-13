const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');


// @desc Register User
// @route POST /api/users
// @access Public
exports.register = asyncHandler(
  async (req,res, next) => {

    const user = await User.create(req.body);

    const token = user.getSignedJwtToken();

    return res.status(201).json({ success: true, data: 'User Registered', token: token });
    
  }
);

// @desc Get Logged In User
// @route GET /api/users
// @access Private
exports.getUser = asyncHandler(
  (req,res) => {
    res.send('get logged in user');
  }
);
