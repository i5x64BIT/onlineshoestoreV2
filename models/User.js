const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  email: String,
  password: String,
  orders: mongoose.Schema.Types.ObjectId,
});
module.exports = mongoose.model("User", userSchema);
