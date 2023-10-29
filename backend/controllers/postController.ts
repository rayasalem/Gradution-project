import { Request, Response } from 'express';
import Post, { IPost } from '../db/schemas/postSchema';
import TagModel from '../db/schemas/tagSchema';

export const createPost = async (req: Request, res: Response) => {
    try {
      const { title, content, tags }:IPost = req.body;
      const existingTags = await TagModel.find({ _id: { $in: tags } });
      if (existingTags.length !== tags.length) {
        return res.status(400).json({ message: 'One or more tags do not exist' });
      }
      const newPost = {
        title,
        content,
        tags,
        author: req.user?._id,
        timestamp: new Date(),
      };
      const createdPost = await Post.create(newPost);
      return res.status(201).json({ message: 'Post created successfully', post: createdPost });
    } catch (error) {
      return res.status(400).json({ message: 'Failed to create post', error });
    }
  };
export const updatePost = async (req: Request, res: Response) => {
    try {
      const postId = req.params.postId;
      const { title, content, tags } = req.body;
      const existingTags = await TagModel.find({ _id: { $in: tags } });
      if (existingTags.length !== tags.length) {
        return res.status(400).json({ message: 'One or more tags do not exist' });
      }
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { title, content, tags },
        { new: true }
      );
      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
      return res.json({ message: 'Post updated successfully', post: updatedPost });
    } catch (error) {
      return res.status(400).json({ message: 'Failed to update post', error });
    }
  };
export const deletePost = async (req: Request, res: Response) => {
        try {
          const postId = req.params.postId; 
          const deletedPost = await Post.findByIdAndDelete(postId);
      
          if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
          }
      
          return res.json({ message: 'Post deleted successfully', post: deletedPost });
        } catch (error) {
          return res.status(400).json({ message: 'Failed to delete post', error });
        }
      };
      
export const getPostById = async (req: Request, res: Response) => {
        try {
          const postId = req.params.postId; 
          const post = await Post.findById(postId);
      
          if (!post) {
            return res.status(404).json({ message: 'Post not found' });
          }
      
          return res.json({ post });
        } catch (error) {
          return res.status(400).json({ message: 'Failed to retrieve post', error });
        }
      }
export const likePost = async (req: Request, res: Response) => {
        try {
          const postId = req.query.postId; 
          const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { $push: { likes: req.user?._id } }, 
            { new: true }
          );

          if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
          }
      
          return res.json({ message: 'Post liked successfully', post: updatedPost });
        } catch (error) {
          return res.status(400).json({ message: 'Failed to like post', error });
        }
      };
export const removeLike = async (req: Request, res: Response) => {
    try {
      const postId = req.query.postId;
      const userId = req.user?._id; 
  
      const post = await Post.findById(postId);
  
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      const likedIndex = post.likes.indexOf(userId);
  
      if (likedIndex === -1) {
        return res.status(400).json({ message: 'You have not liked this post' });
      }
  
      post.likes.splice(likedIndex, 1);
  
      const updatedPost = await post.save();
  
      return res.json({ message: 'Like removed successfully', post: updatedPost });
    } catch (error) {
      return res.status(400).json({ message: 'Failed to remove like', error });
    }
  };
  