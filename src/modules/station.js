const mongoose = require("mongoose");

const Stations = new mongoose.Schema({
  locationName: {
    type: String,
    required: [true, "station name is required"],
    trim: true,
  },
  latitude: {
    type: String,
    required: [true, "latitude is required"],
    trim: true,
  },
  longitude: {
    type: String,
    required: [true, "longitude is required"],
    trim: true,
  },
  services: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "service",
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("station", Stations);
