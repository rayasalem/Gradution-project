import React, { useState } from 'react';
import {
  Typography,
  IconButton,
  Divider,
  Avatar,
  useMediaQuery,
  Paper,
  TextField,
  Button,

} from '@mui/material';
import { Favorite, FavoriteBorder, Comment as CommentIcon } from '@mui/icons-material';
import CommentComponent, { CommentData } from './CommentComponent'; 

const LikesTypography = ({ children }: { children: React.ReactNode }) => (
  <Typography
    style={{
      fontSize: '0.8rem',
      color: '#888',
      marginRight: '10px',
    }}
  >
    {children}
  </Typography>
);

const CommentsTypography = ({ children }: { children: React.ReactNode }) => (
  <Typography
    style={{
      fontSize: '0.8rem',
      color: '#888',
    }}
  >
    {children}
  </Typography>
);

const PostComponent: React.FC = () => {
  const [postLikes, setPostLikes] = useState<number>(15);
  const [postLiked, setPostLiked] = useState<boolean>(false);
  const [postComments, setPostComments] = useState<CommentData[]>([
    {
      id: 1,
      text: 'This is a comment!',
      likes: 3,
      user: {
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/50',
      },
      date: new Date(),
    },
    {
      id: 2,
      text: 'Another comment here!',
      likes: 1,
      user: {
        name: 'Jane Smith',
        avatar: 'https://via.placeholder.com/50',
      },
      date: new Date(),
    },
  ]);
  const [newComment, setNewComment] = useState<string>('');

  const getTimeElapsed = (postDate: Date): string => {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - postDate.getTime();
    return ''; 
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentData: CommentData = {
        id: postComments.length + 1,
        text: newComment,
        likes: 0,
        user: {
          name: 'New User',
          avatar: 'https://via.placeholder.com/50',
        },
        date: new Date(),
      };
      setPostComments([...postComments, newCommentData]);
      setNewComment('');
    }
  };

  const handleLikePost = () => {
    if (!postLiked) {
      setPostLikes((prevLikes) => prevLikes + 1);
      setPostLiked(true);
    } else {
      setPostLikes((prevLikes) => prevLikes - 1);
      setPostLiked(false);
    }
  };

  const handleLikeComment = (commentId: number, isLiked: boolean) => {
    setPostComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              likes: isLiked ? comment.likes + 1 : comment.likes - 1,
            }
          : comment
      )
    );
  };

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const postAuthor = {
    name: 'Post Author',
    avatar: 'https://via.placeholder.com/50',
  };
  const postDate = new Date();

  return (
    
<Paper elevation={3} sx={{ padding: '20px', marginTop: '50px', marginLeft: '20px', maxWidth: isSmallScreen ? '100%' : '70%' }}>

<Typography variant="h4" sx={{ marginBottom: '10px' }}>
        Post Title
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <Avatar src={postAuthor.avatar} alt={postAuthor.name} />
        <div style={{ marginLeft: '10px' }}>
          <Typography variant="body1">{postAuthor.name}</Typography>
          <Typography variant="caption">{postDate.toLocaleString()}</Typography>
          <Typography variant="caption">{getTimeElapsed(postDate)}</Typography>
        </div>
      </div>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
        This is a fake post content. This could be a lengthy description about the post.
        {/* ... (more content) ... */}
      </Typography>
      <Divider sx={{ marginBottom: '10px' }} />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <IconButton onClick={handleLikePost} sx={{ color: postLiked ? 'red' : '' }}>
          <Favorite />
          <LikesTypography>{postLikes} Likes</LikesTypography>
        </IconButton>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CommentIcon />
          <CommentsTypography>{postComments.length} Comments</CommentsTypography>
        </div>
      </div>
      {postComments.map((comment, index) => (
        <CommentComponent
          key={comment.id}
          comment={comment}
          onLikeComment={handleLikeComment}
        />
      ))}
     <TextField
        variant="outlined"
        fullWidth
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        sx={{ marginTop: '10px' }}
      />
      <Button onClick={handleAddComment} variant="contained" sx={{ marginTop: '10px' }}>
        Comment
      </Button>
    </Paper>
  );
};

export default PostComponent;