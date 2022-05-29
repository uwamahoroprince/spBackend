const mongoose = require("mongoose");

const Service = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name is required"],
    trim: true,
  },
  description: {
    type: String,
    require: [true, "description is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "price is required"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("service", Service);
