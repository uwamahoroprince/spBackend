const ErrorResponse = require("../util/errorResponse");
const asyncHandler = require("../util/asyncHandler");
const Service = require("../modules/service");

exports.postService = asyncHandler(async (req, res, next) => {
  const service = await Service.create(req.body);
  if (!service) {
    return next(new ErrorResponse("could not save new service", 400));
  }
  res.status(201).json({
    message: "service saved!",
    data: service,
  });
});
exports.findAllService = asyncHandler(async (req, res, next) => {
  const service = await Service.find({});
  if (!service) {
    return next(new ErrorResponse("could not find services", 400));
  }
  res.status(200).json({
    count: service.length,
    message: "services found!",
    data: service,
  });
});

exports.findSingleService = asyncHandler(async (req, res, next) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    return next(
      new ErrorResponse(
        `could not find service with an id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({
    message: "service found!",
    data: service,
  });
});
exports.deleteService = asyncHandler(async (req, res, next) => {
  const service = await Service.findByIdAndDelete(req.params.id);
  if (!service) {
    return next(new ErrorResponse("could not delete this service", 400));
  }
  res.status(200).json({
    message: "service deleted!",
    data: service,
  });
});
exports.updateService = asyncHandler(async (req, res, next) => {
  const service = await Service.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!service) {
    return next(
      new ErrorResponse(
        `could not update service with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "service updated!",
    data: service,
  });
});
