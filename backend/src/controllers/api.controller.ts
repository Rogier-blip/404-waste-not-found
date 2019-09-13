import { Request, Response, Router } from "express";

const userSchema = require("../models/UserSchema");
const productSchema = require("../models/ProductSchema");

const apiController: Router = Router();

apiController.get("/productDetails", (req: Request, res: Response): void => {
  const barcode: String = req.body.text;
  const product = new productSchema(productSchema.find({ barcode: barcode }));
  res.json(product);
});

module.exports = apiController;
