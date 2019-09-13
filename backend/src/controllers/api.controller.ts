import { Request, Response, Router } from "express";

const productSchema = require("../models/ProductSchema");
const barcodeBasketSchema = require("../models/BarcodeBasketSchema");

const apiController: Router = Router();

apiController.get("/product-details", (req: Request, res: Response): void => {
  const barcode: String = req.body.text;
  const product = new productSchema(productSchema.find({ barcode: barcode }));
  res.json(product);
});

apiController.post("/product-scanned", (req: Request, res: Response): void => {
  const barcode: String = req.body.text;

  console.log(barcode);

  const barcodeBasket = new barcodeBasketSchema({barcode});

  barcodeBasket.save()
    .then(() => res.send('success'))
    .catch((e: any) => res.send(e))

});

apiController.get("/is-there-a-new-product-scanned", (req: Request, res: Response): void => {
  const barcode: String = req.body.text;

  const barcodes = new barcodeBasketSchema(barcodeBasketSchema.find());

  if (barcodes.length > 0) {
    console.log('found');
    // TODO: figure out what to send to the frontend
    // res.send();
  }
});

module.exports = apiController;
