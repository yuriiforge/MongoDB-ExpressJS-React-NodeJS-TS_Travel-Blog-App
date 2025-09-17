import mongoose, { Schema, Document, Types, model } from 'mongoose';
import { IPost } from './Post';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  posts: Types.ObjectId[] | IPost[];
}

const userSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 6 },
  posts: [{ type: Types.ObjectId, ref: 'Post' }],
});

export default model<IUser>('User', userSchema);
