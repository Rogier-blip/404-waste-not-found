import {Request, Response, Router} from 'express';
const userSchema = require('../models/UserSchema');

const userController: Router = Router();

userController.post('/collect-groenies/:userId/:groenies', async (req: Request, res: Response): Promise<void> => {
  const collectGroenies: number = Number(req.params.groenies);
  const userId: String = req.params.userId;

  const user = await userSchema.findOne({userId});
  const currentAmountOfGroenies: number = user.groenies;

  const totalGroenies = currentAmountOfGroenies + collectGroenies;

  await userSchema.findOneAndUpdate({userId}, {groenies: totalGroenies});

  res.json(totalGroenies);
});

userController.get('/earn-groenies/:userId', async (req: Request, res: Response): Promise<void> => {
  const userId: String = req.params.userId;

  const user = await userSchema.findOne({userId});
  const earnedGroenies = user.groenies;


  console.log(earnedGroenies);

  const QRCode = require('qrcode');

  QRCode.toDataURL(earnedGroenies.toString(), function (err: Error, url: string) {
    res.json(url);
  });
  // await userSchema.findOneAndUpdate({userId}, {groenies: 0});
});

userController.post('/insert', (req: Request, res: Response): void => {
  const user = {
    userId: '12345',
    firstName: 'Jan',
    lastName: 'de Vries',
    groenies: 0
  };

  new userSchema(user).save()
    .then(() => res.json('user saved'));
});

userController.get('/get', (req: Request, res: Response): void => {
  userSchema.find()
    .then((users: any[]) => res.json(users[0]));
});

module.exports = userController;
