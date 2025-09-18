import type { Post } from '../types/Post';
import axiosClient from './axiosClient';

interface PostsResponse {
  posts: Post[];
}

class PostsService {
  async getAllPosts(): Promise<Post[]> {
    try {
      const res = await axiosClient.get<PostsResponse>('posts');
      const data = res.data;

      return data.posts;
    } catch (error: unknown) {
      console.error(error);
      throw error;
    }
  }
}

export const postsService = new PostsService();
