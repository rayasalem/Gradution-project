import { Request, Response } from 'express';
import PostModel, { IPost } from './../db/schemas/postSchema'; 
export const createPost = async (req: Request, res: Response) => {
  try {
    const author=req.user?._id
    const { title, content } = req.body;
    const newPost: IPost = new PostModel({ title, content, author });
    const savedPost = await newPost.save();
    res.status(201).json({ message: 'Post created successfully', post: savedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
