import type { AddPostInputs } from '../pages/Add';
import type { Post } from '../types/Post';
import axiosClient from './axiosClient';

interface PostsResponse {
  posts: Post[];
}

interface PostResponse {
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

  async addPost(data: AddPostInputs): Promise<PostResponse> {
    try {
      const res = await axiosClient.post<PostResponse>('posts', {
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

  async getPostDetails(id: string): Promise<PostResponse> {
    try {
      const res = await axiosClient.get<PostResponse>(`posts/${id}`);

      const data = res.data;
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updatePost(
    id: string,
    data: Partial<AddPostInputs>
  ): Promise<PostResponse> {
    try {
      const res = await axiosClient.put<PostResponse>(`posts/${id}`, {
        title: data.title,
        description: data.description,
        location: data.location,
        image: data.imageUrl,
        date: data.date,
      });

      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deletePost(id: string) {
    try {
      const res = await axiosClient.delete(`posts/${id}`);

      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export const postsService = new PostsService();
