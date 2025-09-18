import type { AddPostInputs } from '../pages/Add';
import type { Post } from '../types/Post';
import axiosClient from './axiosClient';

interface PostsResponse {
  posts: Post[];
}

interface AddPostResponse {
  post: Post;
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

  async addPost(data: AddPostInputs): Promise<AddPostResponse> {
    try {
      const res = await axiosClient.post<AddPostResponse>('/posts', {
        title: data.title,
        description: data.description,
        location: data.location,
        image: data.imageUrl,
        date: data.date,
        user: localStorage.getItem('userId'),
      });

      const resData = res.data;
      return resData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export const postsService = new PostsService();
