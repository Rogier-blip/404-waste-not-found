import { Request, Response, Router } from 'express';

import { User } from '../models/user';

const userController: Router = Router();

userController.get('/', (req: Request, res: Response): void => {
    res.send(`You requested GET /users`);
});

userController.post('/', (req: Request, res: Response): void => {
    const user = new User(req.body.email)
    res.send(user)
});

module.exports = userController;
