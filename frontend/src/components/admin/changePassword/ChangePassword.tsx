import React, { useEffect, useState } from 'react';
import {  updateuser } from '../../../api/user';
import { useNavigate, useParams } from 'react-router';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import './changePassword.css'
interface User {
    id: string;
}

const Update: React.FC = () => {
    const { userId } = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [newPass, setNewPass] = useState<string>('');
    const [cNewPass, setCNewPass] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            console.log(userId)
            if (cNewPass === newPass && userId) {
                 await updateuser(userId, newPass); 
                console.log('Password changed successfully!');
            } else {
                console.log('Passwords do not match!');
            }
        } catch (err) {
            console.log('Error changing password:', err);
        }
    };
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <Container style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '40%',
            margin: '1% auto -2%',
            backgroundColor: 'aliceblue',
            boxShadow: '0px 0px 10px black',
            padding: '3%'
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
                            onChange={(e) => setNewPass(e.target.value)}
                            fullWidth
                            className="input-field"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="password"
                            label="Confirm new password"
                            value={cNewPass}
                            onChange={(e) => setCNewPass(e.target.value)}
                            fullWidth
                            className="input-field"
                        />
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