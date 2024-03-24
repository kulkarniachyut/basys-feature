const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const appealService = require('../services/appeal.service');



const doAppeal = catchAsync(async (req, res) => {
    const appeal = await appealService.createAppeal(req.body, req.files);
    res.status(httpStatus.CREATED).send(appeal);
});

const reviewAppeal = catchAsync(async (req, res) => {
    const appeal = await appealService.reviewAppeal(req.body, req.files);
    res.status(httpStatus.CREATED).send(appeal);
});



module.exports = {
    doAppeal,
    reviewAppeal
  };