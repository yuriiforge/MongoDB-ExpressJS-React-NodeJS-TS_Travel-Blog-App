import type { User } from './User';

export interface Post {
  _id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  user: User;
}
