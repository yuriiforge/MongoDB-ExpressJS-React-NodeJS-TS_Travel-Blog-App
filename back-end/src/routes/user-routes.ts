import { Router } from 'express';
import { userController } from '../controllers/user-controller';

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/signup', userController.signup);
userRouter.post('/login', userController.login);

export default userRouter;
