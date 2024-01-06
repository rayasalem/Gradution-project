import { Request, Response } from 'express';
import BlogModel, { IBlog } from './../db/schemas/blogSchema';
import { pagination } from '../services/pagination';
import cloudinary from '../services/cloudinary';

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content, topic, timeToRead} = req.body;
    const author = req.user?._id;
    
    const newBlog: IBlog = new BlogModel({ title, content, author, topic, timeToRead });
    const savedBlog = await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully', blog: savedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: ' server error' });
  }
};
export const uploadImageBlog =async (req: Request, res: Response) => {
  const BlogId =req.params.blogId;
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }else {
    if (!req.file) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
      folder: `blog/${BlogId}`,
    });
  const blog = await BlogModel.findByIdAndUpdate(BlogId, { blogImages:secure_url });
    res.status(200).json({ message: "Success",blog });
  }
}
export const createSection =async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }else {
    const BlogId =req.params.blogId;
    const blog = await BlogModel.findById(BlogId);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    const { subtitle, content, order } = req.body;
    const newSection = {
      subtitle,
      content,
      order,
    };
    blog.sections.push(newSection);
    await blog.save();
    res.status(200).json({ message: "Section created successfully", blog });
  }
}
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
export const updateSection = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  } else {
    const blogId = req.params.blogId;
    const blog = await BlogModel.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    const {sectionNumber, subtitle, content ,order} = req.body;
    const sectionIndex = blog.sections.findIndex((section) => section.order === +sectionNumber);
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Section not found' });
    }
    blog.sections[sectionIndex].subtitle = subtitle;
    blog.sections[sectionIndex].content = content;
    blog.sections[sectionIndex].order = order;
    await blog.save();
    res.status(200).json({ message: 'Section updated successfully', blog });
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
      .limit(4); 
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
export const searchBlog = async (req: Request, res: Response) => {
  try {
    const { querysearch } = req.query;
    if (!querysearch || typeof querysearch !== 'string') {
      return res.status(400).json({ message: 'Invalid or missing query parameters' });
    }
    const searchResults = await BlogModel.find({ title: { $regex: new RegExp(querysearch as string, 'i') } })
    
    return res.status(200).json({ message: 'blog found successfully', searchResults });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
};
export const getSectionByOrder = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.blogId;
    const order = Number(req.params.order);
    if (!blogId || !order) {
      return res.status(400).json({ message: 'Invalid or missing parameters' });
    }
    const blog = await BlogModel.findOne({ _id: blogId });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    const section = blog.sections.find((s) => s.order === order);
    if (!section) {
      return res.status(404).json({ message: 'Section not found' });
    }
    res.status(200).json({ message: 'Section:', section });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
export const deleteSectionByOrder = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.blogId;
    const order = Number(req.params.order);

    if (!blogId || !order) {
      return res.status(400).json({ message: 'Invalid or missing parameters' });
    }

    const blog = await BlogModel.findOne({ _id: blogId });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    const sectionIndex = blog.sections.findIndex((s) => s.order === order);
    if (sectionIndex === -1) {
      return res.status(404).json({ message: 'Section not found' });
    }

    blog.sections.splice(sectionIndex, 1);
    await blog.save();

    res.status(200).json({ message: 'Section deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
