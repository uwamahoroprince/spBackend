const FuelServiceRequest = require("../modules/fuelServices");
const ErrorResponse = require("../util/errorResponse");
const asyncHandler = require("../util/asyncHandler");
const mailSender = require('../util/nodemailer');

exports.postFuelServiceRequest = asyncHandler(async (req, res, next) => {
  const fuelServiceRequest = await FuelServiceRequest.create(req.body);
  if(fuelServiceRequest){
    await mailSender(fuelServiceRequest);
  }else{
    return next(
      new ErrorResponse("could not save new fuelServiceRequest", 400)
    );
  }
  res.status(201).json({
    message: "fuelServiceRequest saved!",
    data: fuelServiceRequest,
  });
});
exports.findAllfuelServiceRequest = asyncHandler(async (req, res, next) => {
  const fuelServiceRequest = await FuelServiceRequest.find({});
  if (!fuelServiceRequest) {
    return next(new ErrorResponse("could not find fuelServiceRequests", 400));
  }
  res.status(200).json({
    count: fuelServiceRequest.length,
    message: "fuelServiceRequests found!",
    data: fuelServiceRequest,
  });
});

exports.findSinglefuelServiceRequest = asyncHandler(async (req, res, next) => {
  const fuelServiceRequest = await FuelServiceRequest.findById(req.params.id);
  if (!fuelServiceRequest) {
    return next(
      new ErrorResponse(
        `could not find fuelServiceRequest with an id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({
    message: "fuelServiceRequest found!",
    data: fuelServiceRequest,
  });
});
exports.deletefuelServiceRequest = asyncHandler(async (req, res, next) => {
  const fuelServiceRequest = await FuelServiceRequest.findByIdAndDelete(
    req.params.id
  );
  if (!fuelServiceRequest) {
    return next(
      new ErrorResponse("could not delete this fuelServiceRequest", 400)
    );
  }
  res.status(200).json({
    message: "fuelServiceRequest deleted!",
    data: fuelServiceRequest,
  });
});
exports.updatefuelServiceRequest = asyncHandler(async (req, res, next) => {
  const fuelServiceRequest = await FuelServiceRequest.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!fuelServiceRequest) {
    return next(
      new ErrorResponse(
        `could not update fuelServiceRequest with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "fuelServiceRequest updated!",
    data: fuelServiceRequest,
  });
});
