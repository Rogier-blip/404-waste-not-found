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

  res.json('total groenies added to user: ' + totalGroenies);
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


module.exports = userController;
