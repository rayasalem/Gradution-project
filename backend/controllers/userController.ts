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

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
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
    next(Object.assign(new Error("Server error"), { cause: 500 }));
  }
};

export const updatePassword = async (req: Request, res: Response, next: NextFunction) => {
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
      return res.json({ message: "User not found" });
    } else {
      const match = await bcrypt.compare(oldPassword, user.password);
      if (!match) {
        res.json({ message: "Old password is invalid" });
      } else {
        const hash = await bcrypt.hash(newPassword, parseInt(process.env.SALTROUNT));
        const updateUser = await userModel.findByIdAndUpdate(req.user._id, { password: hash });
        if (!updateUser) {
          res.json({ message: "Failed to update password" });
        } else {
          res.json({ message: "Password updated successfully" });
        }
      }
    }
  } catch (error) {
    console.error('Error:', error);
    next(Object.assign(new Error("server error"), { cause: 500 }));
  }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userModel.find({});
    res.json({ message: 'Success', users });
  } catch (error) {
    next(Object.assign(new Error("server error"), { cause: 500 }));
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
      next(Object.assign(new Error('User not found'), { cause: 404 }));
    }
    res.json({ message: 'Success, User deleted', user });
  } catch (error) {
    next(Object.assign(new Error('server error'), { cause: 500 }));
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

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    next(Object.assign(new Error('Server error'), { cause: 500 }));
  }
};
export const uploadImage = async (req: Request, res: Response, next: NextFunction) => {
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
      res.status(200).json({ message: "Success" });
    }
  } catch (error) {
    next(Object.assign(new Error("Server error"), { cause: 500 }));
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
