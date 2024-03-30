const mongoose = require("mongooose");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  contactNumber: {
    type: String,
    required: true,
  },
  cityLiving: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Profile", profileSchema);
