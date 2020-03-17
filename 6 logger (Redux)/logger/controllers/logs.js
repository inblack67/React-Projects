const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const Tech = require('../models/Tech');
const Log = require('../models/Log');
const mongoose = require('mongoose');


// @desc Get All Logs
// @route GET /logs
exports.getLogs = asyncHandler(
  async (req, res, next) => {

    const logs = await Log.find();

    return res.status(200).json({ success: true, count: logs.length, data: logs });
  }

);


// @desc Add Log
// @route POST /logs/:id
exports.addLog = asyncHandler(
  async (req, res, next) => {

    const tech = await Tech.findById(req.params.id);

    if(!tech)
    {
      return next(new ErrorResponse('Tech Not Found', 404));
    }

    req.body.tech = tech;
    req.body.techName = `${tech.fullName}`

    const log = await Log.create(req.body);

    return res.status(200).json({ success: true, msg: 'Log Added Successfuly', data: log });
  }

);


// @desc Update Log
// @route PUT /logs/:id/:tech_id
exports.updateLog = asyncHandler(
  async (req, res, next) => {

    const tech = await Tech.findById(req.params.tech_id);

    req.body.tech = tech;
    req.body.techName = `${tech.fullName}`

    const log = await Log.findByIdAndUpdate(req.params.id, req.body, 
      { new: true });

    return res.status(200).json({ success: true, msg: 'Log Updated Successfuly', data: log });
  }

);


// @desc Delete Log
// @route DELETE /logs/:id
exports.deleteLog = asyncHandler(
  async (req, res, next) => {

    await Log.findByIdAndRemove(req.params.id);

    return res.status(200).json({ success: true, msg: 'Log Deleted Successfuly'});
  }

);