import { Request, Response, Router } from "express";
import { User } from "../models/user";

const userController: Router = Router();

userController.get("/", (req: Request, res: Response): void => {
  res.send(`You requested GET /users`);
});

userController.post("/updateUser", (req: Request, res: Response): void => {
  res.send("Thanks for the update man <3");
});

userController.post("/", (req: Request, res: Response): void => {
  const user = new User(
    req.body.firstName,
    req.body.lastName,
    req.body.gronies
  );
  res.send(user);
});

module.exports = userController;
