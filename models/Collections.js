const mongoose = require("mongoose");

let collectionSchema = new mongoose.Schema({
  name: String,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref="Shoe"}],
});

collectionSchema.methods.addItems = function addItems({itemObj}){
  Object.keys(itemObj).forEach( (shoeId) => {
    this.items.push(shoeId);
  });
}
module.exports = mongoose.model("Collection", collectionSchema);
