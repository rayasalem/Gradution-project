import React, { useState } from 'react';
import {
  Typography,
  IconButton,
  Avatar,
  Divider,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import { Favorite, FavoriteBorder, Edit, Delete } from '@mui/icons-material';

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
  onUpdateComment: (commentId: number, newText: string) => void;
  onDeleteComment: (commentId: number) => void;
}> = ({ comment, onLikeComment, onUpdateComment, onDeleteComment }) => {
  const formattedDate = comment.date.toLocaleString();
  const [liked, setLiked] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(comment.text);

  const handleLike = () => {
    setLiked(!liked);
    onLikeComment(comment.id, !liked);
  };

  const handleUpdate = () => {
    onUpdateComment(comment.id, editedText);
    setEditMode(false);
  };

  const handleCancelUpdate = () => {
    setEditMode(false);
    setEditedText(comment.text);
  };

  const handleDelete = () => {
    onDeleteComment(comment.id);
  };

  return (
    <div>
      <Divider style={{ margin: '10px 0' }} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={comment.user.avatar} alt={comment.user.name} />
        <div style={{ marginLeft: '10px' }}>
          <Typography variant="body2">{comment.user.name}</Typography>
          {editMode ? (
            <div>
              <textarea
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                style={{ width: '100%', minHeight: '50px', marginTop: '5px' }}
              />
              <Button onClick={handleUpdate}>Update</Button>
              <Button onClick={handleCancelUpdate}>Cancel</Button>
            </div>
          ) : (
            <Typography variant="body2">{comment.text}</Typography>
          )}
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <Typography variant="body2" color="textSecondary">
            {formattedDate}
          </Typography>
          <IconButton onClick={handleLike}>
            {!liked ? <FavoriteBorder /> : <Favorite sx={{ color: 'red' }} />}
            <LikesTypography commentLikes={comment.likes} />
          </IconButton>
          <IconButton onClick={() => setEditMode(true)}>
            <Edit />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;