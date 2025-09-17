import { Schema, Document, Types, model } from 'mongoose';
import { IUser } from './User';

export interface IPost extends Document<Types.ObjectId> {
  title: string;
  description: string;
  image: string;
  location: string;
  date: Date;
  user: Types.ObjectId | IUser;
}

const postSchema = new Schema<IPost>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default model<IPost>('Post', postSchema);
