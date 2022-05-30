const ErrorResponse = require("../util/errorResponse");
const asyncHandler = require("../util/asyncHandler");
const ServiceRequests = require("../modules/serviceRequests");

exports.postServiceRequests = asyncHandler(async (req, res, next) => {
  const serviceRequests = await ServiceRequests.create(req.body);
  await mailSender(serviceRequests);
  if (!serviceRequests) {
    return next(new ErrorResponse("could not save new serviceRequests", 400));
  }
  res.status(201).json({
    message: "serviceRequests saved!",
    data: serviceRequests,
  });
});
exports.findAllServiceRequests = asyncHandler(async (req, res, next) => {
  const serviceRequests = await ServiceRequests.find({});
  if (!serviceRequests) {
    return next(new ErrorResponse("could not find serviceRequestss", 400));
  }
  res.status(200).json({
    count: serviceRequests.length,
    message: "serviceRequestss found!",
    data: serviceRequests,
  });
});

exports.findSingleServiceRequests = asyncHandler(async (req, res, next) => {
  const serviceRequests = await ServiceRequests.findById(req.body.id);
  if (!serviceRequests) {
    return next(
      new ErrorResponse(
        `could not find serviceRequests with an id of ${req.body.id}`,
        404
      )
    );
  }
  res.status(200).json({
    message: "serviceRequests found!",
    data: serviceRequests,
  });
});
exports.deleteServiceRequests = asyncHandler(async (req, res, next) => {
  const serviceRequests = await ServiceRequests.findByIdAndDelete(req.body.id);
  if (!serviceRequests) {
    return next(
      new ErrorResponse("could not delete this serviceRequests", 400)
    );
  }
  res.status(200).json({
    message: "serviceRequests deleted!",
    data: serviceRequests,
  });
});
exports.updateServiceRequests = asyncHandler(async (req, res, next) => {
  const serviceRequests = await ServiceRequests.findByIdAndUpdate(req.body.id);
  if (!serviceRequests) {
    return next(
      new ErrorResponse(
        `could not update serviceRequests with an id of ${req.body.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "serviceRequests deleted!",
    data: serviceRequests,
  });
});
