import axiosInstance from "../utils/axiosUtils";
import { AxiosResponse } from "axios";
interface UserData {
    username: string;
    email: string;
    password: string; 
    dateOfBirth: string;

}
interface LoginResponse1 {
  token: string;
}
interface LoginResponse {
  token: string;
  userId: string;
}
interface UserResponse {
    id: string;
    username: string;
    email: string;
  }
export const createUser = async (userData: UserData): Promise<string | undefined> => {
  try {
    const response: AxiosResponse<{ token: string }> = await axiosInstance.post('/api/v1/auth/signUp', userData);

    if (response.status === 200) {
      const { token } = response.data;
      return token ; 
      // return response.data;
    }
  } catch (error: any) {
    if (error.response?.status === 409) {
      throw new Error("User with this email already exists.");
      } else {
        console.error("create user error:", error);
      }
  }
};
export const signIn = async (email: string, password: string): Promise<LoginResponse1 | undefined> => {
  try {
    const response: AxiosResponse<{ token: string }> = await axiosInstance.post("/api/v1/auth/signIn", {
      email,
      password,
    });
    if (response.status === 200) {
      const { token} = response.data;
      return {token};
    }
  } catch (error) {
    console.log("login error:", error);
  }
};
export const sendCode = async (email: string): Promise<LoginResponse | undefined> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axiosInstance.patch("/api/v1/auth/sendCode", {
      email,
    });
    if (response.status === 200) {
      const { token, userId } = response.data;
      return { token, userId };
    }
  } catch (error) {
    console.log("sendCode error:", error);
  }
};

export const forgetPassword = async (
  email: string,
  code: string,
  newPassword: string
): Promise<LoginResponse | undefined> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axiosInstance.patch("/api/v1/auth/forgetPassword", {
      email,
      code,
      newPassword,
    });
    if (response.status === 200) {
      const { token, userId } = response.data;
      return { token, userId };
    }
  } catch (error) {
    console.log("forgetPassword error:", error);
  }
};
  
 /**  const handleSocialLogin = async (accessToken:string, provider:string) => {
    try {
      // Call the appropriate function based on the provider
      if (provider === 'facebook') {
        const response = await axiosInstance.post("/api/v1/auth/socialLoginFacebook", { accessToken });
        onSocialLogin(response.data);
      } else if (provider === 'google') {
        const response = await axiosInstance.post("/api/v1/auth/socialLoginGoogle", { accessToken });
        onSocialLogin(response.data);
      }
    } catch (error) {
      console.error('Social login error:', error);
    }
  };*/


export const getCurrentUser = async (id: string): Promise<UserResponse | undefined> => {
  try {
    const response: AxiosResponse<UserResponse> = await axiosInstance.get(`/user/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("get current user error:", error);
  }
};

export const getAllUsers = async (): Promise<UserResponse[] | undefined> => {
  try {
    const response: AxiosResponse<UserResponse[]> = await axiosInstance.get("/users");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("get users error:", error);
  }
};
export const deleteUser = async () => {
  try {
    const response = await axiosInstance.delete('/api/v1/user/delete');

    if (response.status === 200) {
      console.log('Success, User deleted ');
      return response.data;
    } else {
      throw new Error('Failed to User deleted');
    }
  } catch (error) {
    console.error('Failed to User deleted', error);
    throw error;
  }
};
export const updatePassword= async (oldPassword: string,newPassword: string) => {
  try {
    const response = await axiosInstance.patch("/api/v1/user/updatePassword", {
      oldPassword,
      newPassword,
    });
    if (response.status === 200) {
      console.log('Success, User update password ');
      return response.data;
    }
  } catch (error:any) {
    if (error.response?.status === 409) {
      throw new Error("Old password is invalid");
      } else {
        console.log("update password error:", error);
      }
  }
};