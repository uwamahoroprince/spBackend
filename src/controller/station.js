const ErrorResponse = require("../util/errorResponse");
const asyncHandler = require("../util/asyncHandler");
const Station = require("../modules/station");

exports.postStation = asyncHandler(async (req, res, next) => {

  const allServices = [];
  for (const key in req.body.services) {
    allServices.push(req.body.services[key].value);
  }
  const data = {
    services: allServices,
    locationName: req.body.locationName,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };
  const station = await Station.create(data);
  if (!station) {
    return next(new ErrorResponse("could not save new station", 400));
  }
  res.status(201).json({
    message: "station saved!",
    data: station,
  });
});
exports.findAllStation = asyncHandler(async (req, res, next) => {
  const station = await Station.find({});
  if (!station) {
    return next(new ErrorResponse("could not find stations", 400));
  }
  res.status(200).json({
    count: station.length,
    message: "stations found!",
    data: station,
  });
});

exports.findSingleStation = asyncHandler(async (req, res, next) => {
  const station = await Station.findById(req.params.id);
  if (!station) {
    return next(
      new ErrorResponse(
        `could not find station with an id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({
    message: "station found!",
    data: station,
  });
});
exports.deleteStation = asyncHandler(async (req, res, next) => {
  const station = await Station.findByIdAndDelete(req.params.id);
  if (!station) {
    return next(new ErrorResponse("could not delete this station", 400));
  }
  res.status(200).json({
    message: "station deleted!",
    data: station,
  });
});
exports.updateStation = asyncHandler(async (req, res, next) => {
  const station = await Station.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!station) {
    return next(
      new ErrorResponse(
        `could not update station with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "station deleted!",
    data: station,
  });
});
