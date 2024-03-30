const mongoose = require("mongoose");

// Define the schema for the product model
const productSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  contactNo: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["donation", "rent", "sell"],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
