const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  date: Date.now,
  isSent: Boolean,
});
module.exports = mongoose.model(Order, orderSchema);
