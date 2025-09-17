import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Post from '../models/Post';
import User, { IUser } from '../models/User';

class PostsController {
  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await Post.find().populate('user');

      if (!posts) {
        return res.status(500).json({ message: 'Unexpected Error Occurred' });
      }

      return res.status(200).json({ posts });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server Error' });
    }
  }

  async addPost(req: Request, res: Response) {
    const { title, description, location, date, image, user } = req.body;

    if (
      !title?.trim() ||
      !description?.trim() ||
      !location?.trim() ||
      !date ||
      !user ||
      !image?.trim()
    ) {
      return res.status(422).json({ message: 'Invalid Data' });
    }

    try {
      const existingUser = await User.findById(user);
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      const session = await mongoose.startSession();
      session.startTransaction();

      const post = new Post({
        title,
        description,
        image,
        location,
        date: new Date(date),
        user,
      });

      existingUser.posts.push(post.id);
      await existingUser.save({ session });
      await post.save({ session });

      await session.commitTransaction();
      session.endSession();

      return res.status(201).json({ post });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Unexpected Error Occurred' });
    }
  }

  async getPostById(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const post = await Post.findById(id).populate('user');
      if (!post) {
        return res.status(404).json({ message: 'No post found' });
      }
      return res.status(200).json({ post });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server Error' });
    }
  }

  async updatePost(req: Request, res: Response) {
    const id = req.params.id;
    const { title, description, location, image } = req.body;

    if (
      !title?.trim() ||
      !description?.trim() ||
      !location?.trim() ||
      !image?.trim()
    ) {
      return res.status(422).json({ message: 'Invalid Data' });
    }

    try {
      const post = await Post.findByIdAndUpdate(
        id,
        { title, description, location, image },
        { new: true },
      );

      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      return res.status(200).json({ message: 'Updated Successfully', post });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Unable to update' });
    }
  }

  async deletePost(req: Request, res: Response) {
    const id = req.params.id;
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const post = await Post.findById(id).populate('user').session(session);

      if (!post || !post.user) {
        await session.abortTransaction();
        session.endSession();
        return res.status(404).json({ message: 'Post not found' });
      }

      const user = post.user as IUser;

      const postIndex = user.posts.indexOf(post.id);
      if (postIndex !== -1) {
        user.posts.splice(postIndex, 1);
      }

      await user.save({ session });
      await Post.findByIdAndDelete(id).session(session);
      await session.commitTransaction();
      session.endSession();

      return res.status(200).json({ message: 'Deleted Successfully' });
    } catch (err) {
      await session.abortTransaction();
      session.endSession();
      console.error(err);
      return res.status(500).json({ message: 'Unable to delete' });
    }
  }
}

export const postsController = new PostsController();
