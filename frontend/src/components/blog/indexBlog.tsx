import React, {  useState , useEffect} from 'react';
import { Box ,Typography,TextField,Button,Paper} from '@mui/material'
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { SearchInBlog, getBlogs, getpopularBlogs, getprofileInfo } from '../../api/userAction';
import { useRecoilState } from 'recoil';
import { blogsState, popularBlogState } from '../recoilState';
import MediaSection from '../homePage/footer/media/MediaSection';
import StaticFooter from '../homePage/footer/staticFooter/StaticFooter';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, Navigate } from 'react-router-dom';
import './blog.css'
interface blog {
  _id: any;
  title: string;
  content:string;
  topic: string;
  timeToRead: number;
}
const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useRecoilState<blog[]>(blogsState as any);
  const [popularBlogs, setpopularBlogs] = useRecoilState<blog[]>(popularBlogState as any);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
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
    fetchProfileInfo();
  }, []);
  
  const fetchPosts = async () => {
    try{
      const blog = await getBlogs(currentPage, 10);
      setBlogs(blog?.blogs);
      const popularBlogs = await getpopularBlogs()
      console.log(popularBlogs)
      setpopularBlogs(popularBlogs);
    }catch(err){

    }
  }
  useEffect(() => {

    fetchPosts();
  }, [currentPage]);
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value); 
  };
  const handleSearch = async (query:string) => {
    try {
       const searchResults = await SearchInBlog(query);
         setBlogs(searchResults?.searchResults);
      
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  const handleClick = async () => {
  
      navigate(`/Title`);
    }
  const colors = [ '#388e3c', '#039be5', '#8e24aa', '#009688'];
  const colorsTopic = [ '#2e7d32', '#01579b', '#ce93d8', '#00e5ff'];
  return (
    <Box>
      <Box>
            <Typography sx={{color:'#2d3846',fontFamily:'Fira Sans,sans-seri',
        fontSize:'40px',fontWeight:'600',marginBottom:'20px',display:'flex',
        justifyContent:'center',alignItems:'center', paddingTop:'80px',}}>
        Blog</Typography>
        </Box>
        {isAdmin && (
        <Box sx={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <Button
            size="small"
            aria-label="add"
            onClick={handleClick}
            sx={{ zIndex: '1',  }}
          >
            <AddIcon />
            create new Blog
          </Button>
          
        </Box>
      )}
    <Box
    className="BlogPart"
    sx={{
        display: 'flex',
        minHeight: '100vh',
        maxWidth: '100vw',
        overflow: 'hidden',
        }}>
          
        <Box className="blogPart1" >
       
        <Box sx={{padding:'15px',display:'flex',justifyContent:'space-between'}}>
        <TextField id="outlined-basic" label="Search..." variant="outlined" 
        sx={{gap:'16px',width:'570px',height:'54px',borderColor:'#2493df',backgroundColor:'#fff'}}
        onChange={(e) => setSearchQuery(e.target.value)} />
        <Button variant="outlined"sx={{height:'54px',marginLeft:'5px',width:'100px'}}
        onClick={() => handleSearch(searchQuery)}
        >search</Button>
        </Box>
        {blogs.length === 0 && (
               <Typography variant="body1" sx={{ fontSize: '24px', color: '#2d3846'
                    ,fontWeight:600, marginTop: '15px',
                    display:'flex',justifyContent:'center',alignItems:'center' }}>
                   Nothing to show
                </Typography>
              )}
        <Box sx={{padding:'10px',display:'flex',justifyContent:'space-between',
        flexDirection: 'row',flexWrap: 'wrap'}}>
          
        {blogs && blogs.map((blog, index) => (
        <Paper
        className="BlogPaper1"
              elevation={3}
              key={blog._id}
              sx={{
                position: 'relative',
                padding: '15px',
                marginLeft:'12px',
                marginTop:'15px',   
                maxWidth:'40%',
                minWidth:'40%',
                borderRadius:'8px',
                minHeight:'250px',
                backgroundColor: index % 10 === 2 || index % 10 === 7 ? colors[index % 3] : colors[0]
              }}
            >
    <Box >             
        <LibraryBooksIcon sx={{color:'#f5f5f5',position: 'absolute',
    right:'0',padding:'12px',fontSize:'45px'}}></LibraryBooksIcon>   
           </Box>
    
    <Box sx={{paddingTop:'30px'}}>
              <Link
                to={`/Blog/${blog._id}`}
                style={{
                  backgroundColor: index % 10 === 2 || index % 10 === 7 ? colorsTopic[index % 3] : colorsTopic[0],
                  borderRadius: '4px',
                  color: '#ffffff',
                  fontSize: '10px',
                  fontWeight: '600',
                  padding: '5px 12px',
                  textDecoration: 'none',
                  marginRight: '5px',
                  fontFamily:'Fira Sans',
                  textTransform:'uppercase',
                  marginTop: '10px',
                }}
              >
                {blog.topic} 
              </Link>
                 
        <Link
           to={`/Blog/${blog._id}`}  
       style={{ textDecoration: 'none', width: '100%'}}
        > 
        <Typography
          variant='body1'
          sx={{
            fontSize: '24px',
            fontWeight:'600',
            color: '#ffffff',
            marginBottom: '1px',
            fontFamily: 'Fira Sans',
          lineHeight:'1.3' ,
          paddingTop: '12px',}}
        >
               {blog.title}
                </Typography></Link>
                 </Box>
                 <Link
           to={`/Blog/${blog._id}`}  
       style={{ textDecoration: 'none', width: '100%'}}
        > 
                <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            fontWeight:'400',
            color: '#ffffff',
            marginBottom: '1px',
            fontFamily: 'Fira Sans',
            paddingTop: '12px',
          lineHeight:'1.3' }}
        >
          <AccessAlarmIcon sx={{fontSize:'16px'}}></AccessAlarmIcon>
         {blog.timeToRead} min read
                </Typography>
                </Link>
               
            </Paper>
        ))}
        </Box>
        {blogs.length !== 0 && (
        <Stack spacing={2} sx={{margin:'20px',display:'flex',alignItems:'center'}}>
           <Pagination 
                  count={10}
                  page={currentPage}
                variant="outlined"
                 shape="rounded" 
                 onChange={handlePageChange}
                 />
                 </Stack>
        )}
        </Box>        
        <Box  className="blogPart2" sx={{display: 'flex',flexDirection: 'column',padding:'15px'}}>
        <Typography sx={{color:'#2d3846',fontFamily:'Fira Sans',
        fontSize:'20px',fontWeight:'600',marginBottom:'12px',wordBreak:'break-word',
        lineHeight:'1.4',paddingLeft:'20px'
        }}>Most popular blogposts</Typography>
         {popularBlogs && popularBlogs.map((blog, index) => (
           <Paper
              elevation={3}
              className="BlogPaper2"
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
                <span style={{fontSize:'14px',color:'#6b7f99'}}>{blog.timeToRead}min read</span>
                </Link>
                </Paper>
         ))}
                <Typography sx={{color:'#2d3846',fontFamily:'Fira Sans,sans-seri',
        fontSize:'20px',fontWeight:'600',marginBottom:'20px',wordBreak:'break-word',
        paddingTop:'20px',paddingLeft:'20px'
        }}>Learn on the go!</Typography>
                
        </Box>
        </Box>

        <MediaSection/>
        <StaticFooter/>
        </Box>

  )
}

export default Blog