import { Request, Response, Router } from "express";
import {Constants} from '../const';

const productSchema = require("../models/ProductSchema");

const productController: Router = Router();

productController.get("/details", (req: Request, res: Response): void => {
  const barcode: String = req.body.text;

  productSchema.find({ barcode }).then((products: any[]) => res.json(products));
});

productController.post(
  "/insert-all",
  async (req: Request, res: Response): Promise<void> => {
    const products = [
      {
        name: "Crispy Mais",
        groenies: "10",
        description: "This corn is fucking amazing. You can fart for ages.",
        img: Constants.images.CRISPY_MAIS,
        barcode: "8718452270828"
      },
      {
        name: "biologische-naturel-fettuccine",
        groenies: "6",
        description: "Natural spaghetti for your natural fat belly.",
        img: Constants.images.BIOLOGISCHE_NATUREL_FETTUCCINE,
        barcode: "8718452304035"
      },
      {
        name: "dessert-borden",
        groenies: "3",
        description: "Wanna eat a dessert you fat ass? Eat this shit.",
        img: Constants.images.DESSERT_BORDEN,
        barcode: "8718452403035"
      },
      {
        name: "ecologisch-wc-reiniger",
        groenies: "4",
        description:
          "A liquid for your dirty dishes. One drop can wash your entire body as well.",
        img: Constants.images.ECOLOGISCH_WC_REINIGER,
        barcode: "8718452257492"
      },
      {
        name: "schuur-sponsen",
        groenies: "9",
        description:
          "You can clean your dishes and your ass at the same time with this sponge. Then your dishes will be as brown as never and your ass whiter than ever!",
        img: Constants.images.SCHUUR_SPONSEN,
        barcode: "8718449001862"
      }
    ];

    for (let i = 0; i < products.length; i++) {
      await productSchema.findOneAndUpdate(
        { name: products[i].name },
        products[i],
        { upsert: true }
      );
    }

    res.json("all products are correctly inserted");
  }
);

module.exports = productController;
