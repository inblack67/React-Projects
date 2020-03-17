const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const Tech = require('../models/Tech');
const mongoose = require('mongoose');


// @desc Get All techs
// @route GET /techs
exports.getTechs = asyncHandler(
  async (req, res, next) => {
    const techs = await Tech.find();

    return res.status(200).json({ success: true, count: techs.length, data: techs });
  }

);


// @desc Add Tech
// @route POST /techs
exports.addTech = asyncHandler(
  async (req, res, next) => {

    const tech = await Tech.create(req.body);

    return res.status(200).json({ success: true, msg: 'Tech Added Successfuly', data: tech });
  }

);


// @desc Delete Tech
// @route DELETE /techs/:id
exports.deleteTech = asyncHandler(
  async (req, res, next) => {

    await Tech.findByIdAndRemove(req.params.id);

    return res.status(200).json({ success: true, msg: 'Tech Deleted Successfuly' });
  }

);