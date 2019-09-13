import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from 'mongoose';

const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res, next) => {
  const products: any = {};
    await mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

    const connection = mongoose.connection;

    connection.once('open', function () {

      connection.db.collection("products", function (err, collection) {
        collection.find({}).toArray(function (err, data) {
          res.send(data);
        })
      });
    });
});

app.get("/product:barcode", (req, res, next) => {
  res.send(`Hello Express TypeScript Starter`);
});

module.exports = app;
