
import { NextFunction, Request, Response } from 'express';
import userModel  from './../db/schemas/userSchema';
import cloudinary from '../services/cloudinary';
import * as bcrypt from 'bcryptjs';
import  jwt  from 'jsonwebtoken';

interface UserRequestBody {
    userName: string;
    email: string;
    password: string;
  }

export const getProfile = async (req: Request, res: Response,next: NextFunction) =>  {
    try{
        const user=await userModel.findById(req.user._id)
        res.status(200).json({message:"success",user})
       }catch(error){
         next(Object.assign(new Error("server error"), { cause: 500 }));

   }
     }

export const updatePassword = async (req: Request, res: Response, next:NextFunction) =>{
try{
    if (!process.env.SALTROUNT ) {
        throw new Error('SALTROUNT  environment variable is not defined.');
      }
    const{oldPassword,newPassword}=req.body;
    const user=await userModel.findById(req.user._id)
    if (!user) {
        return res.json({ message: "User not found" });
      }else{
        const match= await bcrypt.compare(oldPassword,user.password)
        if(!match){
         res.json({message:"old password invalid"})
        }else{ 
      const hash=await bcrypt.hash(newPassword,parseInt(process.env.SALTROUNT))
     const updateUser = await userModel.findByIdAndUpdate(req.user._id,{password:hash})
    if(!updateUser){
     res.json({message:"fail update password"})
   }else{
     res.json({message:"success"})
   }
     }
      }
}catch(error){
    next(Object.assign(new Error("server error"), { cause: 500 }));
}
}
export const getAllUsers = async (req: Request, res: Response,next:NextFunction) => {
    try {
      const user = await userModel.find({}); 
      res.json({ message: 'Success', user });
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
      res.json({ message: 'success,User deleted', user });
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
        res.json({ message: 'success', user });
      } catch (error) {
        next(Object.assign(new Error('server error'), { cause: 500 }));
      }
  }
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

  
export const uploadImage = async (req: Request, res: Response,next: NextFunction) =>  {
    try{
        if(!req.file){
         next(Object.assign(new Error("please upload profile pic"), { cause: 400 }));

        }else{
        const{secure_url}= await cloudinary.uploader.upload(req.file.path,
            {folder:`user/${req.user._id}/profilepic`})
        const user =await userModel.findByIdAndUpdate(req.user._id,{avatar:secure_url})
        res.status(200).json({message:"succses"})
     } } catch(error){
        next(Object.assign(new Error("Server error"), { cause: 500 }));
     }
      //can use this function to updateProfilePicture -_-

     }

export const createUser = async (req: Request, res: Response,next: NextFunction) =>  {
    try {
        const { userName, email, password } = req.body as UserRequestBody;
        if (!process.env.SALTROUNT || !process.env.EMAILTOKEN) {
          throw new Error('SALTROUNT environment variable is not defined.');
        }
        const User = await userModel.findOne({ email }).select('email');
        if (User) {
          return next(Object.assign(new Error('Email already exists'), { cause: 409 }));
        }else{
            const saltRounds = parseInt(process.env.SALTROUNT);    
          const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new userModel({ userName, email, password: hashedPassword ,confirmEmail:'true'});
        const token = jwt.sign({ id: newUser._id }, process.env.EMAILTOKEN, {expiresIn: '1h',  });         
         const savedUser = await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: savedUser });
        }
    } catch (error) {
        next(Object.assign(new Error('Server error'), { cause: 500 }));
    }
     }

  
  
