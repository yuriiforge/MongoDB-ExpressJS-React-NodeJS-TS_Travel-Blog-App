import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './db/db-connect';
import userRouter from './routes/user-routes';
import postRouter from './routes/post-routes';

const app: Application = express();
dotenv.config();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);
app.use(express.json());

app.use('/user', userRouter);
app.use('/posts', postRouter);

const PORT = process.env.PORT!;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
