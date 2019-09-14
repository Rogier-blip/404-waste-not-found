import {Request, Response, Router} from 'express';
const userSchema = require('../models/UserSchema');

const userController: Router = Router();

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
