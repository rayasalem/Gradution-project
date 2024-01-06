import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  deleteBlog,
  deleteSectionByOrder,
  getBlogById,
  getprofileInfo,
  getrelatedBlog,
} from '../../api/userAction';
import {
  Paper,
  Typography,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,Icon
} from '@mui/material';
import { useNavigate, Navigate } from 'react-router-dom';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BlogNotAvailable from './blogNotAvailable';
import { ErrorOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { relatedBlogState } from '../recoilState';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './blog.css'
interface Section {
  subtitle: string;
  content: string;
  order:number
}

interface Topic {
  title: string;
  sections: Section[];
  content:string;
}
interface blog {
  _id: any;
  title: string;
  content:string;
  topic: string;
  timeToRead: number;
}
const Blog: React.FC = () => {
  const { blogId }: { blogId?: string } = useParams();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [blogData, setBlogData] = useState<Topic | null>(null);
  const [timeToRead, setTimeToRead] = useState<number | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [content, setcontent] = useState<string>('');
  const [change, setChange] = useState<boolean>(false);
  const [isblogAvailable, setIsblogAvailable] = useState<boolean>(true);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState<boolean>(false);
  const [relatedBlog, setrelatedBlog] = useRecoilState<blog[]>(relatedBlogState as any);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const profileInfo = await getprofileInfo();
        if (profileInfo?.user?.role === 'admin') {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error('Error fetching profile info:', error);
      }
    };
    const fetchPosts = async () => {
      try{
        if(blogId){
          const relatedBlog = await getrelatedBlog(blogId);
          setrelatedBlog(relatedBlog?.blogs)
        }
      }catch(err){
        console.error('Error to get related Blog :', err);
      }
    }
    fetchPosts()
    fetchProfileInfo();
  }, []);
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const fetchedBlog = await getBlogById(blogId || '');
        setBlogData(fetchedBlog?.blog);

        if (fetchedBlog?.blog?.blogImages) {
          setImageUrl(fetchedBlog?.blog?.blogImages);
        }

        if (fetchedBlog?.blog?.sections) {
          const totalContent = fetchedBlog?.blog?.sections.reduce(
            (acc: string, section: Section) => acc + (section.content || ''),
            ''
          );

          setTimeToRead(fetchedBlog?.blog?.timeToRead);
          setcontent(fetchedBlog?.blog?.content)
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlogDetails();
  }, [blogId,change]);

 
  
  const handleUpdateBlog = async () => {
    navigate(`/DevLoom/admin/updateBlog/${blogId}`);
  };
  
  const handleUpdateThisSection = async (sectionNumber:number) => {
    navigate(`/DevLoom/admin/updateSectionInBlog/${blogId}/${sectionNumber}`);
  };
  const deleteSection =async (sectionNumber:number,event: React.MouseEvent<HTMLButtonElement>) => {
    if(blogId){
      await deleteSectionByOrder(blogId,sectionNumber)
      setChange(true)
    }
  }
  const handleDeleteBlog=async (event: React.MouseEvent<HTMLButtonElement>) => {
    handleOpenDeleteConfirmation();

  }
  const handleOpenDeleteConfirmation = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
  };
  const handleConfirmDelete = async() => {
    handleCloseDeleteConfirmation();
      await deleteBlog(blogId);
      setIsblogAvailable(false);
  };
  
  const handleaddSectiion = async() => {
    navigate(`/DevLoom/admin/addSection/${blogId}`);

  };
  if (!blogData) {
    return <div>Loading...</div>;
  }

  const { title, sections } = blogData;

  return (
    <Box>
     
      <Box 
      className="BlogPart"
      sx={{
        minHeight: '100vh',
        maxWidth: '100vw',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'start',
        paddingTop:'70px',
       
      }}>
        {isblogAvailable ?(
          <>
      <Box 
      className="blogPart1"
      sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin:'auto',
    }} >
      
        
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
              Are you sure you want to delete this blog ?
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
      {isAdmin && (
        <Box  sx={{
          display: 'flex',
          }}>
            <Button
          onClick={() => {
            handleaddSectiion();
          }}
          variant="contained"
          sx={{
            px: 4,
            py: 2,
            fontSize: '12px',
            bgcolor: '#007bff',
            color: '#fff',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        >
          add section
        </Button>
        <Button
          onClick={() => {
            handleUpdateBlog();
          }}
          variant="contained"
          sx={{
            px: 2,
            py: 2,
            fontSize: '12px',
            bgcolor: '#007bff',
            color: '#fff',
            borderRadius: '5px',
          }}
        >
          Update Entire Blog
        </Button>
         <IconButton
         aria-label="delete"
         size="small"
         onClick={(event) => handleDeleteBlog(event)}
       >
         <DeleteIcon fontSize="inherit" />
       </IconButton>
       </Box>
      )}
      <Box className="BlogbeforeImage"
       sx={{display: 'flex',justifyContent: 'space-between',mb: 4,width: '100%'}}>
      <Typography variant="body2" sx={{ mt: 3 }}>
      <Link 
       to={`/Blogs`} 
       style={{ textDecoration: 'none', width: '100%',color:'#6b7f99'}}
        ><span>DevLoom Blog</span>  </Link>
        <KeyboardArrowRightIcon sx={{fontSize:'15px'}}></KeyboardArrowRightIcon>
         {title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 2 }}>
          <AccessAlarmIcon/> {`${timeToRead} min read`}
      </Typography>
      </Box>
      <Box>
          {imageUrl && (
         <img
         className="BlogImage"
         alt="Blog Image"
         src={imageUrl}
         style={{ margin: '4px', width: '760px', height: '250px' }}
       />
      )}
      </Box>

      
      <Typography variant="h3" sx={{ mb: 4 ,fontSize:'30px',fontWeight:'600'}}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        {content}
      </Typography>
      
      {sections?.map((section, index) => (
        <Box key={index} className="sectionsBlog"sx={{ mb: 4, pb: 4 ,display:'flex',flexDirection: 'column',
        justifyContent: 'center',alignItems: 'center'}}>
          <Typography variant="h4" sx={{ color: 'black', mb: 2,alignItems: 'center',fontSize:'30px',fontWeight:'600' }}>
            {section.subtitle}
          </Typography>
          <Typography variant="body1" sx={{ color: 'black', textAlign: 'left' }}>
            {section.content}
          </Typography>
          {isAdmin && (
            <Box>
        <Button
          onClick={() => {
            handleUpdateThisSection(section.order);
          }}
          variant="contained"
          sx={{
            px: 2,
            py: 2,
            fontSize: '12px',
            bgcolor: '#007bff',
            color: '#fff',
            borderRadius: '5px',
            ml:2
          }}
        >
          Update Section
        </Button>
         <IconButton
         aria-label="delete"
         size="small"
         onClick={(event) => deleteSection(section.order,event)}
       >
         <DeleteIcon fontSize="inherit" />
       </IconButton>
       </Box>
      )}
         
        </Box>
      ))}
    </Box>
    <Box className="blogPart2" sx={{
      margin: '4px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
       padding:'45px'
       }}>
        <Typography sx={{color:'#2d3846',fontFamily:'Fira Sans',
        fontSize:'20px',fontWeight:'600',marginBottom:'12px',wordBreak:'break-word',
        lineHeight:'1.4',paddingLeft:'20px'
        }}>Related blogposts</Typography>
          {relatedBlog && relatedBlog.map((blog, index) => ( 
           <Paper
           className="BlogPaper2"
              elevation={3}
              sx={{
                backgroundColor:'#f2f5f7',
                position: 'relative',
                padding: '15px',
                marginLeft:'12px',
                marginTop:'15px',  
                width:'320px'    ,
                boxSizing:'border-box',
                borderRadius:'8px'
              }}
            >
                <Box sx={{marginBottom:'5px'}}>      
        <Link 
            to={`/Blog/${blog._id}`} 
       style={{ textDecoration: 'none', width: '100%'}}
        > 
        <Typography
          variant='body1'
          sx={{
            color:'#2d3846',
            fontSize: '15px',
            fontWeight:'600',
            marginBottom: '1px',
            fontFamily: 'Fira Sans,sans-seri' }}
        >
                  {blog.title}
                </Typography></Link> </Box>
                <Link 
            to={`/Blog/${blog._id}`} 
               style={{ textDecoration: 'none', width: '100%'}}
                 > 
                <span style={{fontSize:'14px',color:'#6b7f99'}}>
                   {blog.timeToRead} 
                min read</span>
                </Link>
                </Paper>
          ))}
                <Typography sx={{color:'#2d3846',fontFamily:'Fira Sans,sans-seri',
        fontSize:'20px',fontWeight:'600',marginBottom:'20px',wordBreak:'break-word',
        paddingTop:'20px',paddingLeft:'20px'
        }}>Learn on the go!</Typography>
                
        </Box>
        
        </>
    ) : (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
         }}><BlogNotAvailable/></Box>
    )}
    </Box>
    </Box>
  );
};

export default Blog;