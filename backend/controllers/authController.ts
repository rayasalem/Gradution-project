import { NextFunction, Request, Response } from 'express';
import userModel ,{IUser} from '../db/schemas/userSchema';
import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import SendEmail from './../services/email';
import { v4 as uuidv4 } from 'uuid';
import url from 'url';
dotenv.config();

export const signUp = async (req: Request, res: Response,next: NextFunction) => {
 try{
    const { username, email, password, dateOfBirth } = req.body ;
    const user = await userModel.findOne({ email }).select("email");
    if (user) {
      return res.status(409).json({ message: 'Email already exists' });   
     }

    if (!process.env.SALTROUNT || !process.env.EMAILTOKEN) {
      throw new Error('SALTROUNT | EMAILTOKEN environment variable is not defined.');
    }
    if (!process.env.AUTHTOKEN) {
      throw new Error('AUTHTOKEN environment variable is not defined.');
    }
    const SALTROUNT = parseInt(process.env.SALTROUNT);
    const hash = bcrypt.hashSync(password, SALTROUNT);
    const newUser = new userModel({ username, email, password: hash, dateOfBirth });
    const token = jwt.sign({ id: newUser._id }, process.env.AUTHTOKEN, { expiresIn: "1d" });
    res.status(200).json({ message: "Success", token });
    const link = `${req.protocol}://${req.headers.host}${process.env.BASEURL}auth/confirmEmail/${token}`;
    const message = `<a href="${link}">Confirm Email</a>`;
    const info = await SendEmail(email, 'Verify email', message);
    if (info.accepted.length) {
      const savedUser = await newUser.save();
      res.status(201).json({ message: 'Success', token });
    } else {
      return next(Object.assign(new Error("Email rejected"), { cause: 404 }));
    }
}
 catch (err) {
  return res.status(500).json({ message: 'Server error' });}

}
export const confirmEmail = async (req: Request, res: Response,next: NextFunction) => {
  try {
    if (!process.env.AUTHTOKEN) {
      throw new Error('AUTHTOKEN environment variable is not defined.');
    }
     if (!process.env.FEURL) {
      throw new Error('FEURL variable is not defined.');
    } 
    const { token } = req.params;
    const decoded: any = jwt.verify(token, process.env.AUTHTOKEN);

    if (!decoded) {
       next(Object.assign(new Error("Invalid token payload"), { cause: 400 }));

    } else {
      const user = await userModel.findOneAndUpdate(
        { _id: decoded.id, confirmEmail: false },
        { confirmEmail: true }
      );

      if (!user) {
         next(Object.assign(new Error("Account already confirmed"), { cause: 400 }));

      } else {
        const FEURL = process.env.FEURL;
        const redirectURL = url.resolve(FEURL, 'profile');
        res.status(200).redirect(redirectURL);
      }
    }
  } catch (error) {
     console.log(error);
     next(Object.assign(new Error("Server error"), { cause: 500 }));
  }
};
export const signIn = async (req: Request, res: Response, next: NextFunction) => {
  try{
    if (!process.env.AUTHTOKEN) {
      throw new Error('AUTHTOKEN environment variable is not defined.');
    }
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
       next(Object.assign(new Error("Not registered user"), { cause: 404}));
    } else {
      if (!user.confirmEmail) {
       next(Object.assign(new Error("Email not confirmed"), { cause: 403}));
      } else {
        const compare = await bcrypt.compare(password, user.password);
        if (!compare) {
       next(Object.assign(new Error("Invalid password"), { cause: 401}));

        } else {
          const token = jwt.sign({ id: user._id }, process.env.AUTHTOKEN, { expiresIn: "1d" });
          res.status(200).json({ message: "Success", token });
        }
      }
    }
  }   catch (error) {
    console.log(error);
     next(Object.assign(new Error("Server error"), { cause: 500 }));
  }
};
export const sendCode =async (req: Request, res: Response, next: NextFunction) => {
   const {email}=req.body;
   const user =await userModel.findOne({email}).select('email')
    if(!user){
      res.json({message:"invalid acount"})
    }else{
   
      const code: string = uuidv4();
      SendEmail(email,'Forget password',`verify code :${code} `);
      const updateUser=await userModel.updateOne({_id:user._id},{sendCode:code})
      if(!updateUser){
       res.json({message:"invalid"})
      }else{
       res.json({message:"success"})
      }
    }
}
export const forgetPassword =async (req: Request, res: Response, next: NextFunction) => {
  const{code,email,newPassword}=req.body;
  if (!process.env.SALTROUNT) {
    throw new Error('SALTROUNT | EMAILTOKEN environment variable is not defined.');
  }
  if(code==null){
    res.json({message:"fail"})
  }else{
  const hash =await bcrypt.hash(newPassword,parseInt(process.env.SALTROUNT))
  const user =await userModel.findOneAndUpdate({email,sendCode:code},{password:hash,sendCode:null})

  if(!user){
    res.json({message:"fail"})
  }else{
    res.json({message:"success"})

  }

  }
}