import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
const UsbScanner = require('@isirthijs/barcode-scanner');

const app: express.Application = express();
const userController: express.Router = require("./controllers/user.controller");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {

  console.log(UsbScanner.showDevices());

  res.send(`Hello Express TypeScript Starter`);
});

app.use("/users", userController);

module.exports = app;
