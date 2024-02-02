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
  interface IUser {
    userName?: string;
    email?: string;
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
export const createUserByAdmin = async (username:string,email:string,password:string) => {
  try {
    const response = await axiosInstance.post('/api/v1/user/cerateUser', {username,email,password});

    if (response.status === 200) {      
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
  } catch (error:any) {
    if (error.response?.status === 403) {
      throw new Error("Email not confirmed");
      } else if (error.response?.status === 401){
        throw new Error("Invalid password");
      }else{
        console.log("login error:", error);
      }
    
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
export const getprofileInfo = async (userId: string): Promise<{ name: string; email: string; } | undefined> => {
  try {
    const response = await axiosInstance.get(`/api/v1/user//profileInfo/${userId}`);

    if (response.status === 200) {
      const { name, email } = response.data;
      return { name, email };
    }
  } catch (error) {
    console.error('Failed to retrieve user details:', error);
    throw error;
  }
};
export const uploadImage = async (file: any, userId: string) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axiosInstance.post('/api/v1/user/uploadImage', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${userId}` 
      }
    });
    return response;
  } catch (error) {
    console.error('Image upload error:', error);
    throw new Error('Image upload failed');
  }
};
export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/user/allUsers');

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
export const deleteUserById = async (id: any) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/user/deleteUser/${id}`);
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
export const updateuser = async (id: string, password: string) => {
  try {
    const response = await axiosInstance.put(`/api/v1/user/updateUserPassword/${id}`, {
      password, 
    });
    if (response.status === 200) {
      console.log('Success, User updated password');
      return response.data;
    }
  } catch (error: any) {
    console.log("Update password error:", error);
    throw error;
  }
};
export const getUserById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/v1/user/${id}`);
    if (response.status === 200) {
      console.log('Success, User updated password');
      return response.data;
    }
  } catch (error: any) {
    console.log("Update password error:", error);
    throw error;
  }
};
export const updateUserbyAdmin = async (userId: string,username:string,email:string,) => {
  try {
    const response = await axiosInstance.put(`/api/v1/user/updateUserbyAdmin/${userId}`, {
      username, email
    });
    if (response.status === 200) {
      return response.data;
    } 
  } catch (error) {
    console.log("User updated error:", error);
    throw error;
  }
};
export const com = async (userCode: string, selectedLanguage: string) => {
  const options = {
    method: 'POST',
    url: 'https://code-compiler10.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'x-compile': 'rapidapi',
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': 'fbfa9a65c9msh797bf133424f58cp12a1ccjsn148144f8143a',
      'X-RapidAPI-Host': 'code-compiler10.p.rapidapi.com'
    },
    data: {
      langEnum: [
        'php',
        'python',
        'c',
        'c_cpp',
        'csharp',
        'kotlin',
        'golang',
        'r',
        'java',
        'typescript',
        'nodejs',
        'ruby',
        'perl',
        'swift',
        'fortran',
        'bash'
      ],
      lang: selectedLanguage,
      code: userCode,
      input: ''
    }
  };

  try {
    const response = await axiosInstance.request(options);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};