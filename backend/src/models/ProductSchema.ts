import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  groenies: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  barcode: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Product", productSchema);
