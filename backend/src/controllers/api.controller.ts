import { Request, Response, Router } from "express";

const userSchema = require("../models/UserSchema");
const productSchema = require("../models/ProductSchema");

const apiController: Router = Router();

apiController.get("/", (req: Request, res: Response): void => {
  res.send(`You requested GET /users`);
});

apiController.post("/updateUser", (req: Request, res: Response): void => {
  res.send("Thanks for the update man <3");
});

apiController.post("/", (req: Request, res: Response): void => {
  const user = new userSchema(
    req.body.firstName,
    req.body.lastName,
    req.body.gronies
  );
  res.send(user);
});

apiController.get("/productDetails", (req: Request, res: Response): void => {
  const barcode: String = req.body.text;
  const product = new productSchema(productSchema.find({ barcode: barcode }));
  res.json(product);
});

module.exports = apiController;
