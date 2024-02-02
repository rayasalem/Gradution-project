import { NextFunction, Request, Response } from 'express';
import userModel, { IUser } from '../db/schemas/userSchema';
import cloudinary from '../services/cloudinary';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

declare module 'express-serve-static-core' {
  interface Request {
    user?: IUser;
  }
}
export const getProfile = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const user = await userModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: "Success", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'server error' });
  }
};
export const updateUserPassword = async (req: Request, res: Response) => {
  try {
  const { id } = req.params;
  const { password } = req.body;
  const user = await userModel.findById(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }else{
    if (!process.env.SALTROUNT || !process.env.EMAILTOKEN) {
      throw new Error('SALTROUNT | EMAILTOKEN environment variable is not defined.');
    }
    const SALTROUNT = parseInt(process.env.SALTROUNT);
    const hash = bcrypt.hashSync(password, SALTROUNT);
    const updateUser = await userModel.findByIdAndUpdate(id, { password: hash });
    if (!updateUser) {
      res.status(500).json({ message: "Failed to update password" });
    } else {
      res.status(200).json({ message: "Password updated successfully" });
    }
  }
}catch (error) {
  console.error('Error:', error);
  res.status(500).json({ message: 'server error' });
}
}
export const updatePassword = async (req: Request, res: Response) => {
  try {
    if (!process.env.SALTROUNT) {
      throw new Error('SALTROUNDS environment variable is not defined.');
    }
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { oldPassword, newPassword } = req.body;
    const user = await userModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      const match = await bcrypt.compare(oldPassword, user.password);
      if (!match) {
        res.status(409).json({ message: "Old password is invalid" });
      } else {
        const hash = await bcrypt.hash(newPassword, parseInt(process.env.SALTROUNT));
        const updateUser = await userModel.findByIdAndUpdate(req.user._id, { password: hash });
        if (!updateUser) {
          res.status(500).json({ message: "Failed to update password" });
        } else {
          res.status(200).json({ message: "Password updated successfully" });
        }
      }
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'server error' });
  }
};
export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userModel.find({role:'user'});
    res.json({ message: 'Success', users });
  } catch (error) {
    next(Object.assign(new Error("server error"), { cause: 500 }));
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const  id  = req.user?._id; 
    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
    res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'Success, User deleted', user });
  } catch (error) {
    res.status(500).json({ message: 'server error' });

  }
};
export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
        const user = await userModel.findByIdAndDelete(id);
    if (!user) {
    res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'Success, User deleted', user });
  } catch (error:any) {
    res.status(500).json({ message: 'server error',error: error.message });

  }
};
export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      next(Object.assign(new Error('User not found'), { cause: 404 }));
    }
    res.json({ message: 'Success', user });
  } catch (error) {
    next(Object.assign(new Error('server error'), { cause: 500 }));
  }
};
export const updateUser = async (req: Request, res: Response) => {
  try {
    const  id  = req.user?._id; 
    const updates = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'server error' });
  }
};
export const updateUserByAdmin = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; 
    const { username,email} = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(id, { username, email });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully',  updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'server error' });
  }
};
export const uploadImage = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    else {
      if (!req.file) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      const { secure_url } = await cloudinary.uploader.upload(req.file.path, { folder: `user/${req.user._id}/profilepic` });
      const user = await userModel.findByIdAndUpdate(req.user._id, { avatar: secure_url });
      res.status(200).json({ message: "Success",user });
    }
  } catch (error) {
    res.status(500).json({ message: 'server error' });
  }
};
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = req.body;
    if (!process.env.SALTROUNT || !process.env.EMAILTOKEN) {
      throw new Error('SALTROUNDS or EMAILTOKEN environment variable is not defined.');
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return next(Object.assign(new Error('Email already exists'), { cause: 409 }));
    } else {
      const saltRounds = parseInt(process.env.SALTROUNT);
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const newUser = new userModel({ username, email, password: hashedPassword, confirmEmail: true });
      const token = jwt.sign({ id: newUser._id }, process.env.EMAILTOKEN, { expiresIn: '1h' });
      const savedUser = await newUser.save();
      res.status(201).json({ message: 'User created successfully', user: token });
    }
  } catch (error) {
    next(Object.assign(new Error('Server error'), { cause: 500 }));
  }
};
export const listOfUserCoures = async (req: Request, res: Response) => {
  try{
    const userCourse  =  await userModel.findById(req.user?._id).populate({
      path: 'enrolledCourses',
      model: 'Course', 
    });
      res.status(200).json({ message: 'List of User Course ',Course: userCourse?.enrolledCourses });
    } catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Server error' });
}
};



