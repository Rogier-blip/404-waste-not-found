import { IUser } from '../interfaces/IUser';

export class User implements IUser {
  constructor(public email: string) { }
}