import {Request, Response, Router} from 'express';

const productSchema = require('../models/ProductSchema');
const barcodeBasketSchema = require('../models/BarcodeBasketSchema');

const apiController: Router = Router();

apiController.get('/product-details', (req: Request, res: Response): void => {
  const barcode: String = req.body.text;

  productSchema.find({barcode})
    .then((products: any[]) => res.json(products));
});

apiController.post('/product-scanned', (req: Request, res: Response): void => {
  const barcode: String = req.body.text;

  const barcodeBasket = new barcodeBasketSchema({barcode});

  barcodeBasket.save()
    .then(() => res.send('success'))
    .catch((e: any) => res.send(e))

});

apiController.get('/products', (req: Request, res: Response): void => {
  const barcode: String = req.body.text;

  const barcodeBasket = new barcodeBasketSchema({barcode});

  barcodeBasket.save()
    .then(() => res.send('success'))
    .catch((e: any) => res.send(e))

});


apiController.get('/is-there-a-new-product-scanned', (req: Request, res: Response): void => {
  const barcode: String = req.body.text;

  const barcodes = barcodeBasketSchema.find();

  if (barcodes.length > 0) {
    console.log('found');
    res.json(productSchema.find({barcode: barcodes[0]}));
  } else {
    res.send('ok');
  }
});

module.exports = apiController;
