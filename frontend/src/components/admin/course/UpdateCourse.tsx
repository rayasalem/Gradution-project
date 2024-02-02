import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { EditCourse, getCourseDetails2 } from '../../../api/userAction';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCourse: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const navigate = useNavigate();
  const { courseId } = useParams(); 

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        if (courseId){
        const courseDetails = await getCourseDetails2(courseId);
        if (courseDetails) {
          setTitle(courseDetails?.course?.title);
          setDescription(courseDetails?.course?.description);
        }
        } else {
          console.error('Course details not found');
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };
  
    fetchCourseDetails();
  }, [courseId]);
  

  const handleUpdate = async () => {
    try {
      const updatedCourseData = {
        title,
        description,
      };
  
      if (courseId) {
        await EditCourse(courseId, updatedCourseData);
         navigate(`/learn/${title}/${courseId}`);
      } else {
        console.error('Course ID is undefined');
      }
    } catch (err) {
      console.error('Error updating course:', err);
    }
  };
  
  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '40%',
      margin: '1% auto -2%',
      backgroundColor: '#9e9e9e',
      boxShadow: '0px 0px 10px black',
      padding: '3%',
      marginTop:'120px'
    }}>
      <Typography variant="h4" align="center" gutterBottom>
        Update Course
      </Typography>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              fullWidth
              className="input-field"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              className="input-field"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: '10px' }}
              onClick={handleUpdate}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default UpdateCourse;
