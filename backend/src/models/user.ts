import { IUser } from "../interfaces/IUser";

export class User implements IUser {
  constructor(
    public firstName: string,
    public lastName: string,
    public gronies: Number
  ) {}
}
