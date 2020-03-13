const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
const bcrypt = require('bcryptjs');


// @desc Auth User And Get Token
// @route POST /api/auth
// @access Private
exports.login = asyncHandler( async (req, res, next) => {

  const user = await User.findOne({ email: req.body.email }).select('+password')

  if(!user)
  {
    return next(new ErrorResponse('Invalid Credentials', 401));
  }

  const isMatch = await user.isMatch(req.body.password)

  if(!isMatch)
  {
    return next(new ErrorResponse('Invalid Credentials', 401));
  }

  const token = user.getSignedJwtToken();

  return res.status(200).json({ success: true, token });

 }
);


// @desc Get the current logged in user
// @route GET /api/auth
// @access Private
exports.getMe = asyncHandler( async (req, res, next) => {

  const user = await User.findById(req.user.id);

  if(!user)
  {
    return next(new ErrorResponse('Invalid Credentials', 401));
  }

  return res.status(200).json({ success: true, data: user });

 }
);  