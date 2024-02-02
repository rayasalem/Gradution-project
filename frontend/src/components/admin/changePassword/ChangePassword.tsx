import React, { useEffect, useState } from 'react';
import {  updateuser } from '../../../api/user';
import { useNavigate, useParams } from 'react-router';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
interface User {
    id: string;
}

const Update: React.FC = () => {
    const { userId } = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [newPass, setNewPass] = useState<string>('');
    const [cNewPass, setCNewPass] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState('');
    

    const handleSubmit = async () => {
        try {
            if (cNewPass === newPass && userId) {
                 await updateuser(userId, newPass); 
                setSuccessMessage('Password changed successfully!');

            } else {
                setError('Passwords do not match!');
                console.log('Passwords do not match!');
            }
        } catch (err) {
            console.log('Error changing password:', err);
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
                Change User password
            </Typography>
            <div  >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            type="password"
                            label="New password"
                            value={newPass}
                            onChange={(e) => {setNewPass(e.target.value)
                                setError('') }}
                            fullWidth
                            className="input-field"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="password"
                            label="Confirm new password"
                            value={cNewPass}
                            onChange={(e) => {setCNewPass(e.target.value);
                               }}
                            fullWidth
                            className="input-field"
                        />
                        {error && (
                      <Typography variant="body2" color="error" sx={{ width: '350px' }}>
                            {error}
                        </Typography>
                        )}
                         {successMessage && (
                       <Typography variant="body2"sx={{ width: '210px',padding:'5px',color:'green' }}>
                        {successMessage}
                      </Typography>
                          )}
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" style={{
                            marginTop: '10px'
                        }} onClick={handleSubmit}>
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};


export default Update;