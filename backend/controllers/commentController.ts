import { Request, Response } from 'express';
import CommentModel, { IComment } from './../db/schemas/commentSchema'; 
import PostModel from '../db/schemas/postSchema';

export const createCommentByPostId = async (req: Request, res: Response) => {
  try {
    const postId=req.params.postId;
    const author =req.user?._id;
    const { text } = req.body;
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'post not found' });
    }
    const newComment: IComment = new CommentModel({ text, author, PostId: postId });
    const savedComment = await newComment.save();
    post.comments.push(newComment._id); 
    await post.save();
    res.status(201).json({ message: 'Comment created successfully', comment: savedComment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server error' });
  }
};
export const getCommentById = async (req: Request, res: Response) => {
  try {
    const commentId = req.params.commentId;
    const comment = await CommentModel.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server error' });
  }
};
export const getCommentsByPostId = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const comments = await CommentModel.find({ PostId: postId });
    res.status(200).json({ comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server error' });
  }
};

export const updateComment = async (req: Request, res: Response) => {
  try {
    const commentId = req.params.commentId;
    const { text } = req.body;
    const updatedComment = await CommentModel.findByIdAndUpdate(commentId, { text }, { new: true });
    if (!updatedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment updated successfully', comment: updatedComment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server error' });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const commentId = req.params.commentId;
    const deletedComment = await CommentModel.findByIdAndRemove(commentId);
    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server error' });
  }
};
export const getUserAnswers = async (req: Request, res: Response) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    const userComments = await CommentModel.find({ author: userId });
    if (!userComments || userComments.length === 0) {
      return res.status(404).json({ message: 'User has no comments' });
    }
    const userAnswers = [];
    for (const comment of userComments) {
      const postId = comment.PostId;
      const post = await PostModel.findById(postId);
      if (post) {
        userAnswers.push({
          postId,
          title: post.title,
          text: comment.text,
        });
      }
    }
    res.status(200).json({ message: 'User answers :', userAnswers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server error' });
  }
};

