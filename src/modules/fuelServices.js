const mongoose = require("mongoose");

const FuelServiceRequests = new mongoose.Schema({
  station: {
    type: mongoose.Schema.ObjectId,
    ref: "station",
  },
  email: {
    type: String,
    required: true,
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
  fuelType: {
    type: String,
    default: "none",
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
  liters: {
    type: String,
    default: "none",
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
module.exports = mongoose.model("fuelServiceRequests", FuelServiceRequests);
