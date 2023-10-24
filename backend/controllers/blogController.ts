import { Request, Response } from 'express';
import BlogModel, { IBlog } from './../db/schemas/blogSchema';
import { pagination } from '../services/pagination';

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content, topic, timeToRead } = req.body;
    const author = req.user?._id;
    const newBlog: IBlog = new BlogModel({ title, content, author, topic, timeToRead });
    const savedBlog = await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully', blog: savedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: ' server error' });
  }
};
export const getAllBlogs = async (req: Request, res: Response) => { 
  try {
    const page = Number(req.query.page);
    const size = Number(req.query.size);
    if(!page || !size) {
      return res.status(400).json({ message: 'Invalid or missing query parameters' });
    }
    const {limit,skip}=pagination(page,size);
    const blogs = await BlogModel.find()
      .skip(skip)
      .limit(limit);
      res.status(201).json({ message: 'Blogs:', blogs});
    }
   catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server error' });
  }
};
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.blogId;
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      blogId,
      req.body,
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog updated successfully', blog: updatedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server error' });
  }
};
export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.blogId;
    const blog = await BlogModel.findById(blogId).exec();
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    blog.views++;
    await blog.save();
    res.json({ blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server error' });
  }
};
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.blogId;
    const deletedBlog = await BlogModel.findByIdAndDelete(blogId);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: ' server error' });
  }
};
export const getRelatedBlogByTopic = async (req: Request, res: Response) => {
  try {
    const { blogId } = req.params; 
    const currentBlog = await BlogModel.findById(blogId); 
    if (!currentBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    const currentTopic = currentBlog.topic; 
    const relatedBlogs = await BlogModel.find({ topic: currentTopic, _id: { $ne: currentBlog._id } })
      .limit(5); 
    res.status(200).json({ message: 'Related blogs:', blogs: relatedBlogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server error' });
  }
};
export const popularBlogs =async (req: Request, res: Response) =>{
  try {
    const popularBlogs = await BlogModel.find()
      .sort({ views: -1 }) 
      .limit(4); 
    return res.json(popularBlogs);
  } catch (error) {
    return res.status(500).json({ message: 'server error' });
  }
}

