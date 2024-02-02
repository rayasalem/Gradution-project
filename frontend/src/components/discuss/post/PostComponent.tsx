import React, { useState  , useEffect} from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ErrorOutline } from '@mui/icons-material';
import {
  Typography,
  IconButton,
  Divider,
  Avatar,
  useMediaQuery,
  Paper,
  TextField,
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon
} from '@mui/material';
import {
    Delete as DeleteIcon,
    Edit as EditIcon,
  } from '@mui/icons-material';
import {
  Favorite,
  FavoriteBorder,
  Comment as CommentIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import CommentComponent, { CommentData } from './CommentComponent'; 
import { CreateComment, GetCommentByPostId, GetPostById, LikePost, deletePostById, hasUserLikedPost, removelike, updatePost } from '../../../api/userAction';
import PostNotAvailable from './PostNotAvaliable';
import { Box } from '@mui/system';
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

const EditPostPage: React.FC<{
  postId:any ;
  updatedTitle: string;
  updatedText: string;
  setUpdatedTitle: React.Dispatch<React.SetStateAction<string>>;
  setUpdatedText: React.Dispatch<React.SetStateAction<string>>;
  handleDoneUpdate: () => void;
  handleCancelUpdate: () => void;
  handleUpdatePost: (updatedTitle: string, updatedText: string) => void;
  updatedTags: string[] | undefined;
  setUpdatedTags: React.Dispatch<React.SetStateAction<string[]>>;
  }> = ({
    postId,
    updatedTitle,
    updatedText,
    setUpdatedTitle,
    setUpdatedText,
    handleDoneUpdate,
    handleCancelUpdate,
    handleUpdatePost,
    updatedTags,
    setUpdatedTags,
  }) => {
    const handleDone = () => {
      if (postId && updatedTags) {
        updatePost(postId, updatedTitle, updatedText, updatedTags)
          .then(() => {
            handleUpdatePost(updatedTitle, updatedText);
            handleDoneUpdate();
          })
          .catch((error) => {
            console.error('Error updating post:', error);
          });
      }
    };
    return (
      <div>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Update post title..."
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Update post text..."
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
    variant="outlined"
    fullWidth
    placeholder="Update tags..."
    defaultValue={updatedTags?.join(' ')}
    onChange={(e) => {
      setUpdatedTags(e.target.value.split(' '))}}
    sx={{ marginBottom: '20px' }}
  />
        <Button onClick={handleCancelUpdate} sx={{ marginRight: '10px' }}>
          Cancel
        </Button>
        <Button onClick={handleDone}>Done</Button>
      </div>
    );
  };
const PostComponent: React.FC = () => {
  const navigate = useNavigate();
  const [postLikes, setPostLikes] = useState<string[]>();
  const [editPageOpen, setEditPageOpen] = useState<boolean>(false);
  const [postLiked, setPostLiked] = useState<boolean>(false);
  const [updatedText, setUpdatedText] = useState<string>('');
  const [updatedTitle, setUpdatedTitle] = useState<string>(''); 
  const [editing, setEditing] = useState<boolean>(false);
  const [postTitle, setPostTitle] = useState<string>('');
  const [PostAuther, setPostAuther] = useState<string>('');
  const [avatar, setavatar] = useState<string>('');
  const [postText, setPostText] = useState<string>('');
  const [postDate, setpostDate] = useState<Date | undefined>();
  const [postTags, setpostTags] = useState<string[] | undefined>();
  const { postId } = useParams<{ postId: string }>();
  const [postComments, setPostComments] = useState<CommentData[]>([
    
  ]);
  const [newComment, setNewComment] = useState<string>('');
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState<boolean>(false);
  const [updatedTags, setUpdatedTags] = useState<string[]>([]);
  const [isPostAvailable, setIsPostAvailable] = useState<boolean>(true);

  const handleGetPost = async () => {
    try {
      if(postId){
        const specificpost = await GetPostById(postId)
        setPostTitle(specificpost?.post?.title)
        setPostText(specificpost?.post?.content)
        setPostAuther(specificpost?.post?.author?.username)
        setavatar(specificpost?.post?.author?.avatar)
        setpostDate(specificpost?.post?.created_at)
        setpostTags(specificpost?.post?.tags)
        setPostLikes(specificpost?.post?.likes)
       const CommentPost =await GetCommentByPostId(postId)
       setPostComments(CommentPost?.comments)
      }
    } catch (error) {
      console.error('Error results:', error);
    }
  };
  useEffect(() => {
    handleGetPost()
  }, [newComment,postLikes,postComments]);
  
  useEffect(() => {
    const UserLike = async ()=>{
    const userLike= await hasUserLikedPost(postId)  
    setPostLiked(userLike?.hasLiked);
    }
    UserLike();
  }, [postLiked]);
  const handleOpenDeleteConfirmation = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
  };

  const handleDeletePost = async () => {
    handleOpenDeleteConfirmation();
  };
  const handleConfirmDelete = async() => {
    handleCloseDeleteConfirmation();
      await deletePostById(postId);
      setPostTitle('');
      setPostText('');
      setPostComments([]);
      setpostTags([]);
      setIsPostAvailable(false);
      navigate(`/discuss`);
    
  };

  const handleUpdatePost = (newTitle: string, newText: string) => {
    setPostTitle(newTitle);
    setPostText(newText);
  };
  
  const handleAddComment = async() => {
       const newCommentData = await CreateComment(postId,newComment)
      setNewComment('');
    }

  const handleDoneUpdate = () => {
    setPostText(updatedText); 
    setPostTitle(updatedTitle); 
    setEditPageOpen(false);
  };

  const handleDone = () => {
    if(postId){
      updatePost(postId, updatedTitle, updatedText, updatedTags)
      .then((updatedPostId) => {
        handleDoneUpdate(); 
      })
    
    
      .catch((error) => {
        console.error('Failed to update post:', error);
      });
    }
  };
  const handleOpenEditPage = () => {
    setUpdatedTitle(postTitle); 
    setUpdatedText(postText); 
    setEditPageOpen(true);
  };

  const handleCloseEditPage = () => {
    setEditPageOpen(false);
  };
  const handleLikePost = async() => {
    if (!postLiked) {
      await LikePost(postId)
      setPostLiked(true);
    } else {
      await removelike(postId)
      setPostLiked(false);
    }
  };

  const handleLikeComment = (commentId: number, isLiked: boolean) => {
    setPostComments((prevComments) =>
      prevComments.map((comment) =>
        comment._id === commentId
          ? {
              ...comment,
            }
          : comment
      )
    );
  };

  const handleOpenMenu = (postId: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setSelectedPostId(postId);
    setUpdatedText(getPostText(postId));
    setEditing(true);
  };


  const handleUpdateComment = (commentId: number, newText: string) => {
    setPostComments((prevComments) =>
      prevComments.map((comment) =>
        comment._id === commentId
          ? { ...comment, text: newText || comment.text } 
          : comment
      )
    );
  };
  
  
  const handleDeleteComment = (commentId: number) => {
    setPostComments((prevComments) =>
      prevComments.filter((comment) => comment._id !== commentId)
    );
  };
 
  const getPostText = (postId: number): string => {
    return 'This is a fake post content. This could be a lengthy description about the post.';
  };
  const isSmallScreen = useMediaQuery('(max-width:600px)');


  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Paper elevation={3} sx={{ padding: '20px', marginTop: '100px', marginLeft: '20px', maxWidth: isSmallScreen ? '100%' : '70%'  }}>
  {isPostAvailable ? (
    <>
   <Dialog
          open={deleteConfirmationOpen}
          onClose={handleCloseDeleteConfirmation}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <Icon component={ErrorOutline} fontSize="large" color="error"></Icon>
              Are you sure you want to delete this post and its comments?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteConfirmation} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
     <Typography variant="h4">{postTitle}</Typography>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
  <Avatar src={avatar} alt={PostAuther} />
  <div style={{ marginLeft: '10px' }}>
    <Typography variant="body1">{PostAuther}</Typography>
    <Typography variant="caption">{postDate?.toLocaleString()}</Typography>
    {/* <Typography variant="caption">{getTimeElapsed(postDate)}</Typography> */}
   
  </div>
  <IconButton
        aria-label="more"
        aria-controls="post-menu"
        aria-haspopup="true"
        onClick={handleOpenMenu(1)} 
        style={{ marginLeft: 'auto' }}
      >
    <MoreVertIcon />
  </IconButton>
  <Menu
        id="post-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={handleOpenEditPage}>
          <EditIcon /> Update Post
        </MenuItem>
        <MenuItem onClick={handleDeletePost}>
          <DeleteIcon /> Delete Post
        </MenuItem>
      </Menu>

      {editPageOpen && (
        <EditPostPage
        postId={postId} 
        updatedTitle={updatedTitle}
        updatedText={updatedText}
        setUpdatedTitle={setUpdatedTitle}
        setUpdatedText={setUpdatedText}
        updatedTags={postTags}
        setUpdatedTags={setUpdatedTags}
        handleDoneUpdate={handleDone}
        handleCancelUpdate={handleCloseEditPage}
        handleUpdatePost={handleUpdatePost}
        />
      )}
      
</div>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>
      <Typography variant="body1">{postText}</Typography>
      {postTags?.map((tag) => (
              <Link
                key={tag}
                to={``}  
                style={{
                  backgroundColor: '#eaf0f3',
                  borderRadius: '4px',
                  color: '#6b7f99',
                  fontSize: '10px',
                  fontWeight: '600',
                  padding: '5px 12px',
                  textDecoration: 'none',
                  marginRight: '5px',
                }}
              >
                {tag}
              </Link>
            ))}
      </Typography>
 
      <Divider sx={{ marginBottom: '10px' }} />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <IconButton onClick={handleLikePost} sx={{ color: postLiked ? 'red' : '' }}>
          <Favorite />
          <LikesTypography>{postLikes?.length} Likes</LikesTypography>
        </IconButton>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CommentIcon />
          <CommentsTypography>{postComments.length} Comments</CommentsTypography>
        </div>
      </div>
      {postComments.map((comment, index) => (
        <div key={comment._id}>
        <CommentComponent
            key={comment._id}
            comment={comment}
            onLikeComment={handleLikeComment}
            onUpdateComment={handleUpdateComment}
            onDeleteComment={handleDeleteComment}
          />

        </div>
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
      </>
       ) : (
        <Typography variant="h4"><PostNotAvailable/></Typography>
      )}
    </Paper>
    </Box>
  );
};

export default PostComponent;