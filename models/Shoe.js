const mongoose = require("mongoose");

let shoeSchema = new mongoose.Schema({
  name: String,
  collection: [{ type: mongoose.Types.ObjectId, ref: "Collection" }],
  size: Number, //const nums
  inStock: 0,
  price: Number,
});
shoeSchema.methods.addToStock = function addToStock(ammount) {
  this.inStock += ammount;
};
shoeSchema.methods.subFromStock = function subFromStock(ammount) {
  if (this.inStock > ammount) {
    this.inStock -= ammount;
  } else {
    return new RangeError("Not enough product");
  }
};

module.exports = mongoose.model("Shoe", shoeSchema);
