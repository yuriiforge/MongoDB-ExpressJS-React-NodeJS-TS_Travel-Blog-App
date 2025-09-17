import { Request, Response, NextFunction } from 'express';
import { compareSync, hashSync } from 'bcryptjs';
import User, { IUser } from '../models/User';

class UserController {
  async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users: IUser[] = await User.find();
      return res.status(200).json({ users });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Unexpected Error Occurred' });
    }
  }

  async getUserById(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;

    try {
      const user = (await User.findById(id).populate('posts')) as IUser;
      if (!user) {
        return res.status(404).json({ message: 'No user found' });
      }
      return res.status(200).json({ user });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Unexpected Error Occurred' });
    }
  }

  async signup(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { name, email, password } = req.body;

    if (!name?.trim() || !email?.trim() || !password || password.length < 6) {
      return res.status(422).json({ message: 'Invalid Data' });
    }

    const hashedPassword = hashSync(password);

    try {
      const user = new User({ email, name, password: hashedPassword });
      await user.save();
      return res.status(201).json({ user });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Unexpected Error Occurred' });
    }
  }

  async login(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { email, password } = req.body;

    if (!email?.trim() || !password || password.length < 6) {
      return res.status(422).json({ message: 'Invalid Data' });
    }

    try {
      const existingUser = (await User.findOne({ email })) as IUser;
      if (!existingUser) {
        return res.status(404).json({ message: 'No user found' });
      }

      const isPasswordCorrect = compareSync(password, existingUser.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Incorrect Password' });
      }

      return res.status(200).json({
        id: existingUser._id,
        message: 'Login Successful',
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Unexpected Error Occurred' });
    }
  }
}

export const userController = new UserController();
