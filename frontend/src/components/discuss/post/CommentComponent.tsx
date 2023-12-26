import React, { useState } from 'react';
import { Typography, IconButton, Avatar, Divider } from '@mui/material';
import { Favorite, FavoriteBorder, Comment as CommentIcon } from '@mui/icons-material';

export interface CommentData {
  id: number;
  text: string;
  likes: number;
  user: {
    name: string;
    avatar: string;
  };
  date: Date;
}

const LikesTypography: React.FC<{ commentLikes: number }> = ({ commentLikes }) => (
  <Typography style={{ fontSize: '0.8rem', color: '#888', marginRight: '10px' }}>
    {commentLikes} Likes
  </Typography>
);

const CommentsTypography: React.FC<{ commentsCount: number }> = ({ commentsCount }) => (
  <Typography style={{ fontSize: '0.8rem', color: '#888' }}>
    {commentsCount} Comments
  </Typography>
);

const CommentComponent: React.FC<{
  comment: CommentData;
  onLikeComment: (commentId: number, liked: boolean) => void;
}> = ({ comment, onLikeComment }) => {
  const formattedDate = comment.date.toLocaleString();
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = () => {
    setLiked(!liked);
    onLikeComment(comment.id, !liked);
  };

  return (
    <div>
      <Divider style={{ margin: '10px 0' }} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={comment.user.avatar} alt={comment.user.name} />
        <div style={{ marginLeft: '10px' }}>
          <Typography variant="body2">{comment.user.name}</Typography>
          <Typography variant="body2">{comment.text}</Typography>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="body2" color="textSecondary">
          {formattedDate}
        </Typography>
        <IconButton onClick={handleLike}>
          {!liked ? <FavoriteBorder /> : <Favorite sx={{ color: 'red' }} />}
          <LikesTypography commentLikes={comment.likes} />
        </IconButton>
      </div>
    </div>
  );
};

export default CommentComponent;