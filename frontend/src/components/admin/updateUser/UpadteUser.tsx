import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { getUserById, updateUserbyAdmin } from './../../../api/user';

interface User {
  id: string;
  username: string;
  email: string;
}

const UpdateUser: React.FC = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
         const data = await getUserById(userId || '');
        setUsername(data?.user?.username);
        setEmail(data?.user?.email);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchData();
  }, [userId]);

  const handleSubmit = async () => {
    try {
        if (userId){
        const updatedData =  await updateUserbyAdmin( userId, username, email );
        setSuccessMessage('Updated successfully!');
        }
    } catch (err) {
      console.log('Error updating:', err);
    }
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column',
     alignItems: 'center', width: '40%', margin: '1% auto -2%',
      backgroundColor: '#9e9e9e', boxShadow: '0px 0px 10px black',
       padding: '3%'
       ,marginTop:'120px'
    }}>
      <Typography variant="h4" align="center" gutterBottom>
        Update user info
      </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              className="input-field"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              className="input-field"
            />
            {successMessage && (
                       <Typography variant="body2"sx={{ width: '210px',padding:'5px',color:'green' }}>
                        {successMessage}
                      </Typography>
                          )}
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}
            onClick={handleSubmit}>
              Update
            </Button>
          </Grid>
        </Grid>
    </Container>
  );
};

export default UpdateUser;