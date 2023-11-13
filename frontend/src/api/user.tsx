import axiosInstance from "../utils/axiosUtils";
import { AxiosResponse } from "axios";
interface UserData {
    username: string;
    email: string;
    password: string; 
    dateOfBirth: string;
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
export const createUser = async (userData: UserData): Promise<UserData | undefined> => {
  try {
    const response: AxiosResponse<UserData> = await axiosInstance.post('/api/v1/auth/signUp', userData);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    // if (error.response?.status === 409) {
    //     console.log("User already exists or conflict error. You can handle it here.");
    //   } else {
    //     console.error("create user error:", error);
    //   }
    console.error("create user error:", error);
  }
};

export const signIn = async (email: string, password: string): Promise<LoginResponse | undefined> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axiosInstance.post("/api/v1/auth/signIn", {
      email,
      password,
    });
    if (response.status === 200) {
      const { token, userId } = response.data;
      return { token, userId };
    }
  } catch (error) {
    console.log("login error:", error);
  }
};
export const sendCode = async (email: string): Promise<LoginResponse | undefined> => {
    try {
      const response: AxiosResponse<LoginResponse> = await axiosInstance.post("/api/v1/auth/signIn", {
        email,
      });
      if (response.status === 200) {
        const { token, userId } = response.data;
        return { token, userId };
      }
    } catch (error) {
      console.log("login error:", error);
    }
  };
export const forgetPassword = async (email:string, code:string, newPassword:string): Promise<LoginResponse | undefined> => {
    try {
      const response: AxiosResponse<LoginResponse> = await axiosInstance.post("/api/v1/auth/forgetPassword", {
        email,
        code,
        newPassword
      });
      if (response.status === 200) {
        const { token, userId } = response.data;
        return { token, userId };
      }
    } catch (error) {
      console.log("login error:", error);
    }
  };

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