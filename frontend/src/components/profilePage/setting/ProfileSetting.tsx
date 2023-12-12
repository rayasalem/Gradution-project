import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Typography, TextField, Button,
   MenuItem, Select, FormControl, InputLabel } from '@mui/material';import Modal from '@mui/material/Modal';
import { SelectChangeEvent } from '@mui/material/Select';
import { deleteUser, updatePassword } from './../../../api/user';
import Joi from 'joi';

interface ProfileSettingsProps {
  open: boolean;
  onClose: () => void;
}
const countries = [
  'United States',
  'United Kingdom',
  'Canada',
];
const ProfileSettings: React.FC<ProfileSettingsProps> = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({newPassword: "",});
  const [error, setError] = useState<string | null>(null);


  const ResetPasswordSchema = Joi.object().required().keys({
    newPassword: Joi.string()
      .min(8)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/)
      .required().messages({
        'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, and one special character.',
      })
  });
  useEffect(() => {
    setSuccessMessage('');
  }, [activeTab]);
  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };
  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCountry(event.target.value);
  };
const handleChangePasswordClick= async () => {
  const validationResult = ResetPasswordSchema.validate({
      newPassword
    });

    if (validationResult.error) {
      validationResult.error.details.forEach((detail) => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [detail.path[0]]: detail.message,
        }));
      });
      return;
    }
    try {
      await updatePassword( oldPassword,newPassword);
      setSuccessMessage('Password changed successfully');
      setOldPassword('');
      setNewPassword('');
    }
     catch (error: any) {
      console.error('Error Delete User:', error);
      setError(error.message);
    }
  };
const handleDeleteClick = async () => {
    try {
      await deleteUser();
    }
     catch (error) {
      console.error('Error Delete User:', error);
    }
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          height: '77vh', 
          bgcolor: '#fff',
          boxShadow: 24,
          p: 4,
          overflow: 'hidden'
        }}
      >
        <Button sx={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: '#333' }} onClick={onClose}>
          X
        </Button>
          <Box sx={{ display: 'flex',paddingTop:'5px', flexDirection: { xs: 'column', md: 'row' } }}>
            <List component="nav">
              <ListItem button selected={activeTab === 'general'} onClick={() => handleTabChange('general')}>
                <ListItemText primary="General" />
              </ListItem>
              <ListItem button selected={activeTab === 'password'} onClick={() => handleTabChange('password')}>
                <ListItemText primary="Password" />
              </ListItem>
              <ListItem button selected={activeTab === 'delete'} onClick={() => handleTabChange('delete')}>
                <ListItemText primary="Delete Account" />
              </ListItem>
            </List>
            <Box sx={{ flex: 1 }}>
              {activeTab === 'general' && (
                <div>
                  
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ marginLeft: { xs: 0, md: 4 }, marginTop: { xs: 2, md: 0 } }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>information</Typography>
                        
                        <TextField   type="file"/>
                        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                          Allowed JPG, PNG. Max size of 800K
                        </Typography>
                        <Button variant="contained" sx={{ width:'55px',height:'30px' }}>
                          Upload 
                        </Button>
                        
                      </Box>
                    </Box>
                    <Box sx={{ p: 2 }}>
                      <TextField label="Name" sx={{mb: 5, width:'300px',height:'25px'}}  />
                      <TextField label="E-mail" sx={{ mb: 5,width:'300px',height:'25px'}}  />
                      <TextField label="Bio" sx={{ mb: 5,width:'300px',height:'25px'}}  />
                      <FormControl fullWidth sx={{ mb: 5 ,width:'300px',height:'25px'}}>
                <InputLabel htmlFor="country-select" >Country</InputLabel>
                <Select
                  labelId="country-select"
                  id="country-select"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  {countries.map((country) => (
                    <MenuItem key={country} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>                        
              <Button variant="contained" color="primary">
                          Save changes
                        </Button>
                    </Box>
                  </div>
              )}

              {activeTab === 'password' && (
                    <Box sx={{ p: 2 }}>
                     <Typography variant="h6" sx={{ mb: 1 }}>Password</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                     <TextField label="Current Password" type="password"
                     onChange={(e) => {
                      setOldPassword(e.target.value); 
                      setError('');
                    }}
                     sx={{ mb: 1 }} />
                     {error && (
                      <Typography variant="body2" color="error" sx={{ width: '350px' }}>
                            {error}
                        </Typography>
                        )}
                    <TextField label="New Password" type="password" 
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        newPassword: "", 
                      }));
                      
                    }}
                    sx={{ mb: 1,mt:1 }} />
                     {errors.newPassword && (
                    <Typography variant="body2" color="error" sx={{ width: '350px' }}>
                     {errors.newPassword}
                      </Typography>
                          )}
                     
                     <Button variant="contained" onClick={handleChangePasswordClick}
                     sx={{width:'150px',mb:4}}>Change</Button>
                     {successMessage && (
                       <Typography variant="body2"sx={{ width: '210px',backgroundColor:'#4caf50',padding:'5px',color:'#fff' }}>
                        {successMessage}
                      </Typography>
                          )}
                      </Box>
                    </Box>

              )}

              {activeTab === 'delete' && (
                    <Box sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                    Delete Account </Typography> 
                    
                    <Typography variant="body2"  sx={{ mb: 1 ,fontSize:'14px',lineHeight:'20px',fontWeight:'700'}}>
                    Are you sure you want to continue?
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                        If you have a problem, our customer support team will be happy to help.
                      </Typography>
                      <Typography variant="body2"  sx={{ mb: 1 ,fontSize:'14px',lineHeight:'20px',fontWeight:'700'}}>
                      Account deletion is permanent.This action cannot be undone.
                      </Typography>
                      <Button variant="contained" 
                       onClick={handleDeleteClick}>
                        Delete Account
                      </Button>
                    </Box>
                  
              )}
            </Box>
          </Box>
      </Box>
    </Modal>
  );
};

export default ProfileSettings;
