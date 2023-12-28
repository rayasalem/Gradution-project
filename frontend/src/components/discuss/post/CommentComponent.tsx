import React, { useState, useEffect } from 'react';
import {
  Typography,
  IconButton,
  Avatar,
  Divider,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import { Favorite, FavoriteBorder, Edit, Delete, Sync } from '@mui/icons-material';
import { LikeComment, deleteCommentById, hasUserLikedComment, removelikeinComment, updateComment } from '../../../api/userAction';

export interface CommentData {
  _id: any;
  text: string;
  author: {
    username: string;
    avatar: string;
  };
  createdAt: Date;
  likes:[string];
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
  const formattedDate = comment?.createdAt?.toLocaleString();
  const [liked, setLiked] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(comment.text);
  useEffect(() => {
    const checkUserLiked = async ()=>{
     const userLike= await hasUserLikedComment(comment._id)  
     console.log(userLike)
     setLiked(userLike?.hasLikedComment)
     onLikeComment(comment._id,userLike?.hasLikedComment)
    }
    checkUserLiked();
  }, [comment._id,liked]);
  const handleLike = async(commentId:any) => {
    if(!liked){
      await LikeComment(commentId)
    setLiked(true);
     onLikeComment(commentId, true);
    }else{
      await removelikeinComment(commentId)
      setLiked(false);
      onLikeComment(commentId, false);
    }
  };

  const handleUpdate = async(commentId:any) => {
    onUpdateComment(comment._id, editedText);
    setEditMode(false);
    const update = await updateComment(commentId, editedText);

  };

  const handleCancelUpdate = () => {
    setEditMode(false);
    setEditedText(comment.text);
  
  };

  const handleDelete = async () => {
    onDeleteComment(comment._id);
     await deleteCommentById(comment._id)
  };

  return (
    <div>
      <Divider style={{ margin: '10px 0' }} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={comment.author.avatar} alt={comment.author.username} />
        <div style={{ marginLeft: '10px' }}>
          <Typography variant="body2">{comment.author.username}</Typography>
          {editMode ? (
            <div>
              <textarea
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                style={{ width: '100%', minHeight: '50px', marginTop: '5px' }}
              />
              <Button onClick={() =>handleUpdate(comment._id)}>Update</Button>
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
          <IconButton onClick={() =>handleLike(comment._id)}>
            {!liked ? <FavoriteBorder /> : <Favorite sx={{ color: 'red' }} />}
            <LikesTypography commentLikes={comment.likes?.length} />
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