const mongoose = require("mongoose");

const ServiceRequests = new mongoose.Schema({
  service: {
    type: mongoose.Schema.ObjectId,
    ref: "service",
    require: true,
  },
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "user",
  // },
  station: {
    type: mongoose.Schema.ObjectId,
    ref: "station",
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  price:{
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  plateNumber: {
    type: String,
    required: [true, "plate number is required"],
    trim: true,
  },
  transactionNumber: {
    type: String,
    unique: true,
    trim: true,
  },
  //LOCATION ATTRIBUTES

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("serviceRequests", ServiceRequests);
