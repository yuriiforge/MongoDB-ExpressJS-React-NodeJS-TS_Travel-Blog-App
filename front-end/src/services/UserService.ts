import type { AuthInputs } from '../pages/Auth';
import axiosClient from './axiosClient';

interface AuthResponse {
  id: string;
  message: string;
}

class UserService {
  async authRequest(signup: boolean, data: AuthInputs): Promise<AuthResponse> {
    try {
      const res = await axiosClient.post(
        `user/${signup ? 'signup' : 'login'}`,
        {
          name: data.name ? data.name : '',
          email: data.email,
          password: data.password,
        }
      );

      const resData = await res.data;

      return resData;
    } catch (error: unknown) {
      console.error(error);
      throw error;
    }
  }
}

export const userService = new UserService();
