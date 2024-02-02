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
    const comments = await CommentModel.find({ PostId: postId }).
    populate({path: 'author',
    select: 'username avatar',});;
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
export const likeComment = async (req: Request, res: Response) => {
  try {
    const commentId = req.params.commentId;
    const comment = await CommentModel.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    const hasLiked = comment.likes.includes(req.user?._id);
    if (hasLiked) {
      return res.status(400).json({ message: 'You have already liked this comment' });
    }
    const updatedcomment = await CommentModel.findByIdAndUpdate(
      commentId,
      { $push: { likes: req.user?._id } }, 
      { new: true }
    );
    if (!updatedcomment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    return res.status(201).json({ message: 'Comment liked successfully', comment: updatedcomment });
  } catch (error) {
    return res.status(400).json({ message: 'Failed to like comment', error });
  }
};
export const removeLike = async (req: Request, res: Response) => {
  try {
    const commentId = req.params.commentId;
    const userId = req.user?._id; 
    const comment = await CommentModel.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'comment not found' });
    }
    const likedIndex = comment.likes.indexOf(userId);
    if (likedIndex === -1) {
      return res.status(400).json({ message: 'You have not liked this comment' });
    }
    comment.likes.splice(likedIndex, 1);
    const updatedPost = await comment.save();
    return res.status(201).json({ message: 'Like removed successfully', post: updatedPost });
  } catch (error) {
    return res.status(400).json({ message: 'Failed to remove like', error });
  }
};
export const hasUserLikedComment = async (req: Request, res: Response) => {
  try {
  const commentId = req.params.commentId;
  const userId = req.user?._id;
  if (!userId) {
    return res.status(401).json({ message: 'User not authenticated' });
  }
  const Comment = await CommentModel.findOne({ _id: commentId });
  if (Comment && Comment.likes.includes(userId)) {
    return res.status(200).json({ hasLikedComment: true });
  } else {
    return res.status(200).json({ hasLikedComment: false });
  }
  } catch (error:any) {
    throw new Error(`Failed to check if user has liked Comment: ${error.message}`);
  }
};

