import {Request, Response, Router} from 'express';

const productSchema = require('../models/ProductSchema');
const barcodeBasketSchema = require('../models/BarcodeBasketSchema');

const apiController: Router = Router();

apiController.get('/product-details', (req: Request, res: Response): void => {
  const barcode: String = req.body.text;

  productSchema.find({barcode})
    .then((products: any[]) => res.json(products));
});

apiController.get('/insert-products-in-db', (req: Request, res: Response): void => {
  const products = [
    {
      name: 'Crispy Mais',
      groenies: '10',
      description: 'This corn is fucking amazing. You can fart for ages.',
      img: 'crispy-mais.jpg',
      barcode: '8718452270828'
    },
    {
      name: 'biologische-naturel-fettuccine',
      groenies: '6',
      description: 'Natural spaghetti for your natural fat belly.',
      img: 'biologische-naturel-fettuccine.jpg',
      barcode: '8718452304035'
    },
    {
      name: 'dessert-borden',
      groenies: '3',
      description: 'Wanna eat a dessert you fat ass? Eat this shit.',
      img: 'dessert-borden.jpg',
      barcode: '8718452403035'
    },
    {
      name: 'ecologisch-wc-reiniger',
      groenies: '4',
      description: 'A liquid for your dirty dishes. One drop can wash your entire body as well.',
      img: 'ecologisch-wc-reiniger.jpg',
      barcode: '8718452257492'
    },
    {
      name: 'schuur-sponsen',
      groenies: '9',
      description: 'You can clean your dishes and your ass at the same time with this sponge. Then your dishes will be as brown as never and your ass whiter than ever!',
      img: 'schuur-sponsen.jpg',
      barcode: '8718449001862'
    }
  ];

  products.forEach(product => new productSchema(product).save());

  res.json('ok');
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
