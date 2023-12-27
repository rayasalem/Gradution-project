import React, { useState  , useEffect} from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
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
import { GetPostById, updatePost } from '../../../api/userAction';
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
    updatedTitle: string;
    updatedText: string;
    setUpdatedTitle: React.Dispatch<React.SetStateAction<string>>;
    setUpdatedText: React.Dispatch<React.SetStateAction<string>>;
    handleDoneUpdate: () => void;
    handleCancelUpdate: () => void;
  }> = ({
    updatedTitle,
    updatedText,
    setUpdatedTitle,
    setUpdatedText,
    handleDoneUpdate,
    handleCancelUpdate,
  }) => {
    const handleDone = () => {
      handleDoneUpdate();
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
        <Button onClick={handleCancelUpdate} sx={{ marginRight: '10px' }}>
          Cancel
        </Button>
        <Button onClick={handleDone}>Done</Button>
      </div>
    );
  };
const PostComponent: React.FC = () => {
  const [postLikes, setPostLikes] = useState<number>(15);
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
  const [postTags, setpostTags] = useState<string[]>();
  
  const { postId } = useParams<{ postId: string }>();

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
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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

      }
    } catch (error) {
      console.error('Error results:', error);
    }
  };
  useEffect(() => {
    handleGetPost()
  }, []);
  const handleDeletePost = () => {
    const confirmed = window.confirm('Are you sure you want to delete this post and its comments?');
    if (confirmed) {
      setPostTitle('');
      setPostText('');
      setPostComments([]);
    }
  };

  const handleUpdatePost = async () => {
    try {
      const postId: string = selectedPostId ? String(selectedPostId) : '';
      const updatedPost = await updatePost(postId, {
        title: updatedTitle,
        content: updatedText,
      });
  
    } catch (error) {
      console.error('Failed to update post:', error);
    }
  };
  
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
  const handleDoneUpdate = () => {
    setPostText(updatedText); 
    setPostTitle(updatedTitle); 
    setEditPageOpen(false);
  };


  const handleOpenEditPage = () => {
    setUpdatedTitle(postTitle); 
    setUpdatedText(postText); 
    setEditPageOpen(true);
  };

  const handleCloseEditPage = () => {
    setEditPageOpen(false);
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

  const handleOpenMenu = (postId: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setSelectedPostId(postId);
    setUpdatedText(getPostText(postId));
    setEditing(true);
  };


  const handleUpdateComment = (commentId: number, newText: string) => {
    setPostComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, text: newText || comment.text } 
          : comment
      )
    );
  };
  
  
  const handleDeleteComment = (commentId: number) => {
    setPostComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  };
 
  const getPostText = (postId: number): string => {
    return 'This is a fake post content. This could be a lengthy description about the post.';
  };
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const postAuthor = {
    name: 'Post Author',
    avatar: 'https://via.placeholder.com/50',
  };

  return (
    <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px', marginLeft: '20px', maxWidth: isSmallScreen ? '100%' : '70%' }}>
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
          updatedTitle={updatedTitle}
          updatedText={updatedText}
          setUpdatedTitle={setUpdatedTitle}
          setUpdatedText={setUpdatedText}
          handleDoneUpdate={handleUpdatePost}
          handleCancelUpdate={handleCloseEditPage}
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
          <LikesTypography>{postLikes} Likes</LikesTypography>
        </IconButton>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CommentIcon />
          <CommentsTypography>{postComments.length} Comments</CommentsTypography>
        </div>
      </div>
      {postComments.map((comment, index) => (
        <div key={comment.id}>
        <CommentComponent
            key={comment.id}
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
    </Paper>
  );
};

export default PostComponent;