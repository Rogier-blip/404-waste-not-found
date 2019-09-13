import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const barcodeBasketSchema = new Schema({
  barcode: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('BarcodeBasket', barcodeBasketSchema);
