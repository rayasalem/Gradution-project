import React, { useState, useEffect } from 'react';
import { Avatar, Box, Paper, Typography, Button } from '@mui/material';
import Footer from '../homePage/footer/Footer';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { getprofileInfo, retrieveUserBitsAndHearts,getlistOfUserCoures } from '../../api/userAction';
import { Link } from 'react-router-dom';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useRecoilState } from 'recoil';
import { coursesState } from '../recoilState';
import { useNavigate } from 'react-router';

interface Course {
courseId:{
  _id: any;
  title: string;
}
}
const ProfilePage:React.FC = () => {
  const navigate = useNavigate();
  const [userIsAddict, setuserIsAddict] = React.useState(false);
  const [courses, setCourses] = useRecoilState<Course[]>(coursesState as any);
  const [bitsCount, setBitsCount] = useState<number>();
  const [uploadedImage, setUploadedImage] = useState('/images/user.png');
  const [userName, setUserName] = useState('');
  const [Bio, setBio] = useState('');
  const [Country, setCountry] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { bitsCount } = await retrieveUserBitsAndHearts();
        setBitsCount(bitsCount);
      } catch (error) {
        console.error('Error retrieving bits and hearts:', error);
      }
    };

    fetchData();
  }, []); 
  useEffect(() => {
    const fetchDataCourse = async () => {
      try {
        const response = await getlistOfUserCoures();
        const uniqueCourses = Array.from(new Set(response.userEnrollments.map((course: Course) => course.courseId._id)))
        .map((_id: any) => response.userEnrollments.find((course: Course) => course.courseId._id === _id) as Course);
console.log(uniqueCourses)
      setCourses(uniqueCourses);
      } catch (error) {
        console.error('Error to Get List of User Course:', error);
      }
    };

    fetchDataCourse();
  }, [setCourses]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
          const profileInfo = await getprofileInfo(); 
          if (profileInfo) {
            setUserName(profileInfo?.user?.username);
            setBio(profileInfo?.user?.bio)
            setCountry(profileInfo?.user?.country)
            setUploadedImage(profileInfo?.user?.avatar)
            if (profileInfo?.user?.role === 'admin') {
              setuserIsAddict(true);
            }
          }
      } catch (error) {
        console.error('Error fetching profile info:', error);
      }
    };

    fetchData();
  }, []);
  const handlecreateUser =()=>{
    navigate(`/DevLoom/admin/createUser`);
}
const handlemangeUser=()=>{
  navigate(`/DevLoom/admin`);
}
const handledisplayFeedBack=()=>{
  navigate(`/DevLoom/admin/AllFeedBack`);
}
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#f2f5f7',
          maxWidth: '100vw',
        }}
      >
           <Box
        sx={{
          minHeight: '55vh',
          backgroundColor: 'rgb(45, 56, 70)',
          maxWidth: '100vw',
          borderBottomLeftRadius: '50%',
          borderBottomRightRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{display: 'flex', alignItems: 'center',paddingTop:'100px'}}>
        <Avatar  
        alt="Your Name"
        src={uploadedImage}
        sx={{ width: '120px',maxWidth: '120px',height: '120px',borderRadius: '50%',marginBottom: '5px'}} />
         <Box  sx={{ backgroundColor: 'transparent', marginLeft: '16px', padding: '16px' }}>
        <Typography variant="h5" gutterBottom sx={{color:'#fff',fontSize:'26px',fontWeight:'600'}}>
          {userName}
        </Typography>
        <Typography variant="subtitle1" sx={{color:'#c8d2db',fontSize:'12px',fontWeight:'300'}}>
          {Bio}
        </Typography>
        {!userIsAddict && 
        <Typography variant="subtitle1" sx={{color:'#fff',fontSize:'15px',fontWeight:'500'}}>
        <ViewInArIcon style={{ fontSize: 18, color: '#ecaa00' ,paddingRight:'6px'}} />
          {bitsCount} Bit 
        </Typography> }
        <Typography variant="subtitle1" sx={{color:'#fff',fontSize:'18px',fontWeight:'300'}}>
          {Country}
        </Typography>
        </Box>
        </Box>
         

        </Box>
        {!userIsAddict ? (
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 330,
        },
       
        justifyContent: 'center',
      }}
    > 
      <Paper elevation={3} sx={{ maxHeight: '300px', 
        overflow: 'auto',}}>
        <Typography  sx={{color:'#2d3846',fontSize:'20px',fontWeight:'600',padding:'8px',marginBottom:'20px'}}> Courses Progress</Typography>
        {courses  && Array.isArray(courses) && courses.map((course) => (<Button
        key={course.courseId._id}
    component={Link}
    to={`/learn/${course.courseId.title}/:`} 
    sx={{width:'300px',padding:'10px'}}>
        <Box sx={{ display: 'flex'}}>
        <Box >
        <img
        src={`./images/${course.courseId.title}.png`}
          alt={course.courseId.title}
          style={{
            width: '40px',
            maxWidth: '40px',
            height: '40px',
            borderRadius: '50%',
            marginBottom: '10px',
          }}
        />
        </Box>
        <Box sx={{ paddingLeft:'10px',width:'150px'}}>
        <Typography sx={{color:'#6b7f99'}}>{course.courseId.title}</Typography>
        <Typography sx={{color:'#6b7f99'}}>In Progress</Typography>
        </Box>
        <Box sx={{ paddingLeft:'10px'}}>
      <PlayCircleOutlineIcon >
      </PlayCircleOutlineIcon>
      </Box>
        </Box>
        </Button> ))}
      </Paper>
    </Box>
  ):(
    <Box sx={{display: 'flex',justifyContent:'center',alignItems:'center',paddingTop:'20px',flexDirection:'column'}}>
      <Button variant="outlined" color="primary" sx={{width:'300px',alignItems:"center"}}
            onClick={handlemangeUser}> Manage user </Button>
            <Button variant="outlined" color="primary" sx={{width:'300px',alignItems:"center",marginTop:'10px'}}
            onClick={handlecreateUser}> Create new User </Button>
            <Button variant="outlined" color="primary" sx={{width:'300px',alignItems:"center",marginTop:'10px'}}
            onClick={handledisplayFeedBack}> FeedBack page </Button>
    </Box>
  )}
  
        </Box>
        <Footer/>
        </Box>

  )
}

export default ProfilePage