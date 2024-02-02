import React, {  useState , useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Button, TextField, Typography,Paper} from '@mui/material'
import { Link } from 'react-router-dom';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Footer from '../homePage/footer/Footer';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate, Navigate } from 'react-router-dom';
import { GetAllPost, GetHotPost, GetMyPost, GetTrendingPost, GetUnansweredPost, SearchInPost } from '../../api/userAction';
import { useRecoilState } from 'recoil';
import { hotpostsState, postsState } from '../recoilState';
import './discuss.css';
interface Post {
  _id: any;
  title: string;
  tags: string[];
  created_at:Date;
  author:{
    username: string;
    avatar: string;
  }
  comments:[string];
  likes:[string];
}
interface hotPosts{
  _id: any;
  title: string;
  likeCount:number;
}
const Discuss = () => {
  const [posts, setPosts] = useRecoilState<Post[]>(postsState as any);
  const [hotPosts, sethotPosts] = useRecoilState<hotPosts[]>(hotpostsState as any);
  const [Sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const fetchPosts = async () => {
    try {
      const hotPostTody =await GetHotPost()
       sethotPosts(hotPostTody?.hotPosts)
       if (Sort === 'Trending') {
        const trendPost = await GetTrendingPost(currentPage, 5);
        setPosts(trendPost?.trendposts);
      } else if (Sort === 'Unanswered') {
        const unansweredPost = await GetUnansweredPost(1, 5);
        setPosts(unansweredPost?.UnansweredPosts);
      } else if (Sort === 'My Qustions') {
        const myPost = await GetMyPost(currentPage, 5);
        setPosts(myPost?.myPosts);
      } else {
        const response = await GetAllPost(currentPage, 5);
        setPosts(response?.posts);
      }
      
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
    useEffect(() => {

      fetchPosts();
    }, [currentPage,Sort]);
  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  const CreatePost = () => {
    navigate(`/discuss/New`);

  };
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value); 
  };
  const handleSearch = async (query:string) => {
    try {
       const searchResults = await SearchInPost(query);
      if (searchResults && searchResults.posts) {
        setPosts(searchResults.posts);
      } else {
        console.error('Invalid search results format:', searchResults);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  return (
    <Box>
      <Box
      className="discussPart"
        sx={{
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: '#f2f5f7',
          maxWidth: '100vw',
          overflow: 'hidden',
          paddingTop:'80px'
        }}
      >
        <Box className="discussPart1"
         sx={{padding:'15px',display: 'flex',flexDirection: 'column',}}>
        <Typography sx={{color:'#2d3846',fontFamily:'Fira Sans,sans-seri',fontSize:'24px',fontWeight:'600',marginBottom:'20px'}}>
            Q&A Discussions</Typography>
        <Box sx={{padding:'15px',display:'flex',justifyContent:'space-between'}}>
        <TextField id="outlined-basic" label="Search..." variant="outlined" sx={{gap:'16px',width:'570px',height:'54px',borderColor:'#2493df',backgroundColor:'#fff'}}
        onChange={(e) => setSearchQuery(e.target.value)}/>
        <Button variant="outlined"sx={{height:'54px',marginLeft:'5px',width:'100px'}}
        onClick={() => handleSearch(searchQuery)}>search</Button>
        </Box>
        <Box sx={{padding:'10px',display:'flex',justifyContent:'space-between'}}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          value={Sort}
          id="demo-simple-select-helper"
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem value={'Trending'}>Trending</MenuItem>
          <MenuItem value={'Most Recent'}>Most Recent</MenuItem>
          <MenuItem value={'Unanswerd'}>Unanswerd</MenuItem>
          <MenuItem value={'My Qustions'}>My Qustions</MenuItem>

        </Select>
      </FormControl>
      <Button variant="contained" onClick={CreatePost} sx={{height:'54px',backgroundColor:'#2493df',fontFamily:'Fira Sans",sans-serif'}}>
        Ask a question</Button>
        </Box>
        {posts.length === 0 && (
  <Typography variant="body1" sx={{ fontSize: '24px', color: '#2d3846'
  ,fontWeight:600, marginTop: '15px',display:'flex',justifyContent:'center' }}>
    Nothing to show
  </Typography>
)}
        {posts && posts.map((post) => (
        <Paper
              elevation={3}
              className="discussPaper1"
              sx={{
                position: 'relative',
                padding: '15px',
                marginLeft:'12px',
                marginTop:'15px',   
                Width:'500px'   
              }}
            >
    <Box sx={{marginBottom:'10px'}}>      
        <Link
           to={`/discuss/${post._id}`}  
       style={{ textDecoration: 'none', width: '100%'}}
        > 
        <Typography
          variant='body1'
          sx={{
            fontSize: '20px',
            fontWeight:'600',
            color: 'black',
            marginBottom: '1px',
            fontFamily: 'Fira Sans,sans-seri' }}
        >
                  {post.title}
                </Typography></Link> </Box>
                <Box sx={{marginBottom:'30px'}}>
                {post?.tags.map((tag) => (
              <Link
                key={tag}
                to={`/discuss/${post._id}`}
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
                </Box>
                <Box>
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, margin: '10px',display:'flex' ,flexDirection:'row'}}>
            <Box> 
                <ThumbUpAltIcon sx={{fontSize:'18px'}}></ThumbUpAltIcon>
                <span style={{fontSize:'12px',color:'#6b7f99'}}>{post.likes.length} Vote</span>
            </Box>  
            <Box sx={{marginLeft:'8px'}}>
                <Link to={`/discuss/${post._id}`} style={{fontSize:'12px',color:'#6b7f99',textDecoration: 'none'}}>
                <ChatBubbleIcon sx={{fontSize:'18px',color:'#000'}}></ChatBubbleIcon>{post.comments.length} Answer
                </Link>
            </Box>
            </Box>               
           <Box sx={{ position: 'absolute', bottom: 0, right: 0, margin: '10px',display:'flex' ,flexDirection:'row'}}>
            <Box><Typography sx={{color:'#6b7f99',fontFamily:'Fira Sans,sans-seri',fontSize:'12px',fontWeight:'400'}}>
            {post.created_at.toLocaleString()}</Typography> <Typography sx={{color:'#2493df',fontFamily:'Fira Sans,sans-seri',fontSize:'12px',fontWeight:'400'}}>
            {post.author.username}</Typography></Box>
            <Box>
            <img
          src={post.author.avatar} alt={post.author.username}
          style={{
          width: '30px',maxWidth: '30px',
          height: '30px',borderRadius: '50%',
          }}/>
            </Box>
          </Box>
                  </Box>
            </Paper>
        ))}
        {posts.length !== 0 && (
    <Stack spacing={2} sx={{margin:'20px',display:'flex',alignItems:'center'}}>
           <Pagination 
                  count={totalPages}
                  page={currentPage}
                variant="outlined"
                 shape="rounded" 
                   onChange={handlePageChange}/>
                 </Stack>
                 )}
          
        </Box>
        <Box className="discussPart2"
        sx={{padding:'15px'}}>
        <Typography sx={{color:'#2d3846',fontFamily:'Fira Sans,sans-seri',fontSize:'24px',fontWeight:'600',marginBottom:'20px',
    wordBreak:'break-word'}}>
        Hot today</Typography>
        <Box sx={{display: 'flex',flexDirection: 'column'}}>
        {hotPosts.map((hotPost) =>(
           <Paper
              elevation={3}
              className="discussPaper2"
              sx={{
                position: 'relative',
                padding: '15px',
                marginLeft:'12px',
                marginTop:'15px',  
                width:'400px'    
              }}
            >
                <Box sx={{marginBottom:'5px'}}>      
        <Link
            to={`/discuss/${hotPost._id}`} 
       style={{ textDecoration: 'none', width: '100%'}}
        > 
        <Typography
          variant='body1'
          sx={{
            fontSize: '20px',
            fontWeight:'600',
            color: 'black',
            marginBottom: '1px',
            fontFamily: 'Fira Sans,sans-seri' }}
        >
                  {hotPost.title}
                </Typography></Link> </Box>
                <Box> 
                <ThumbUpAltIcon sx={{fontSize:'18px',color:'#6b7f99'}}></ThumbUpAltIcon>
                <span style={{fontSize:'12px',color:'#6b7f99'}}>{hotPost.likeCount} Vote</span>
                </Box>
                </Paper>
        ))} 
        </Box>
        </Box>
        </Box>
       
        <Footer/>
        </Box>

  )
}

export default Discuss