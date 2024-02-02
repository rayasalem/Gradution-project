import { Request, Response } from 'express';
import Post, { IPost } from '../db/schemas/postSchema';
import { pagination } from '../services/pagination';

export const createPost = async (req: Request, res: Response) => {
    try {
      const { title, content, tags } = req.body;
      const newPost = {
        title,
        content,
        tags,
        author: req.user?._id,
      };
      const createdPost = await Post.create(newPost);
      return res.status(201).json({ message: 'Post created successfully', post: createdPost });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to create post', error });
    }
  };
export const updatePost = async (req: Request, res: Response) => {
    try {
      const postId = req.params.postId;
      const { title, content, tags } = req.body;
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { title, content, tags },
        { new: true }
      );
      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
      return res.json({ message: 'Post updated successfully', post: postId });
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
          const post = await Post.findById(postId).populate({path: 'author',
          select: 'username avatar',});
          if (!post) {
            return res.status(404).json({ message: 'Post not found' });
          }
          return res.status(201).json({ message: 'Post found successfully', post: post });
        } catch (error) {
          return res.status(400).json({ message: 'Failed to retrieve post', error });
        }
      }
export const likePost = async (req: Request, res: Response) => {
        try {
          const postId = req.params.postId; 

          const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { $push: { likes: req.user?._id } }, 
            { new: true }
          );
          if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
          }
          return res.status(201).json({ message: 'Post liked successfully', post: updatedPost });
        } catch (error) {
          return res.status(400).json({ message: 'Failed to like post', error });
        }
      };
export const removeLike = async (req: Request, res: Response) => {
    try {
      const postId = req.params.postId;
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
  
      return res.status(201).json({ message: 'Like removed successfully', post: updatedPost });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to remove like', error });
    }
  };
export const hasUserLikedPost = async (req: Request, res: Response) => {
    try {
    const postId = req.params.postId;
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    const post = await Post.findOne({ _id: postId });

    if (post && post.likes.includes(userId)) {
      return res.status(200).json({ hasLiked: true });
    } else {
      return res.status(200).json({ hasLiked: false });
    }
    } catch (error:any) {
      throw new Error(`Failed to check if user has liked post: ${error.message}`);
    }
  };
export const gitAllPost = async (req: Request, res: Response) =>{
  try{
  const page = Number(req.query.page);
    const size = Number(req.query.size);
    if(!page || !size) {
      return res.status(400).json({ message: 'Invalid or missing query parameters' });
    }
    const {limit,skip}=pagination(page,size);
    const posts = await Post.find().skip(skip).populate({path: 'author',
    select: 'username avatar',}).sort({ created_at: -1 })
    .limit(limit);
    res.status(201).json({ message: 'posts:', posts});
  } catch (error) {
    res.status(500).json({ message: 'server error' });
  }
}
export const getHotPostsForToday =async (req: Request, res: Response) =>{
  try{
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);
    const hotPosts = await Post.aggregate([
      {
        $match: {
          created_at: {
            $gte: todayStart,
            $lte: todayEnd,
          },
        },
      },
      {
        $project: {
          title: 1,
          created_at: 1,
          likeCount: { $size: '$likes' },
        },
      },
      {
        $sort: {
          likeCount: -1,
        },
      },
      {
        $limit: 5, 
      },
    ]);
    res.status(201).json({ message: 'hotPosts:', hotPosts});
  }
  catch (error) {
    res.status(500).json({ message: 'server error' });
  }
}
export const getTrendingPost = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page);
    const size = Number(req.query.size);
    if (!page || !size) {
      return res.status(400).json({ message: 'Invalid or missing query parameters' });
    }
    const { limit, skip } = pagination(page, size);

    const trendposts = await Post.aggregate([
      {
        $addFields: {
          commentCount: { $size: '$comments' },
        },
      },{
        $sort: { commentCount: -1, created_at: 1 },
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
      {
        $lookup: {
          from: 'users', 
          localField: 'author',
          foreignField: '_id',
          as: 'author',
        },
      },
      {
        $unwind: '$author',
      },
      {
        $project: {
          title: 1,
          content: 1,
          tags: 1,
          author: {
            username: '$author.username',
            avatar: '$author.avatar',
          },
          likes: 1,
          comments: 1,
          commentCount: 1,
          created_at: 1,
        },
      },
    ]);

    res.status(201).json({ message: 'posts:', trendposts });
  } catch (error) {
    res.status(500).json({ message: 'server error' });
  }
};
export const getUnansweredPost = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page);
    const size = Number(req.query.size);
    if (!page || !size) {
      return res.status(400).json({ message: 'Invalid or missing query parameters' });
    }
    const { limit, skip } = pagination(page, size);
    const UnansweredPosts = await Post.find({ comments: { $size: 0 } })
      .skip(skip)
      .populate({
        path: 'author',
        select: 'username avatar',
      })
      .limit(limit);

    res.status(201).json({ message: 'posts:', UnansweredPosts });
  } catch (error) {
    res.status(500).json({ message: 'server error' });
  }
};
export const getMyPosts = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page);
    const size = Number(req.query.size);
    const userId = req.user?.id; 
    if (!page || !size || !userId) {
      return res.status(400).json({ message: 'Invalid or missing query parameters' });
    }
    const { limit, skip } = pagination(page, size);
    const myPosts = await Post.find({ author: userId })
      .skip(skip)
      .populate({
        path: 'author',
        select: 'username avatar',
      })
      .limit(limit);

    res.status(201).json({ message: 'My posts:', myPosts });
  } catch (error) {
    res.status(500).json({ message: 'server error' });
  }
};
export const searchPosts = async (req: Request, res: Response) => {
  try {
    const { querysearch } = req.query;
    if (!querysearch || typeof querysearch !== 'string') {
      return res.status(400).json({ message: 'Invalid or missing query parameters' });
    }
    const searchResults = await Post.find({ title: { $regex: new RegExp(querysearch as string, 'i') } }).
    populate({path: 'author',
    select: 'username avatar',});
    return res.json({ message: 'Posts found successfully', posts: searchResults });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
};