import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Typography, TextField, Button,
   MenuItem, Select, FormControl, InputLabel } from '@mui/material';import Modal from '@mui/material/Modal';
import { SelectChangeEvent } from '@mui/material/Select';
import { deleteUser, updatePassword } from './../../../api/user';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ReactCountryFlag from 'react-country-flag';
import { updateUserInfo, uploadImage } from '../../../api/userAction';
import { Link } from 'react-router-dom';
import Joi from 'joi';
import { getprofileInfo } from '../../../api/userAction';

interface ProfileSettingsProps {
  open: boolean;
  onClose: () => void;
}
const ProfileSettings: React.FC<ProfileSettingsProps> = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({newPassword: "",});
  const [error, setError] = useState<string | null>(null);
  const [fetchedCountries, setFetchedCountries] = useState<any[]>([]);
  const [uploadedImage, setUploadedImage] = useState('/images/user.png');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [Bio, setBio] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
          const profileInfo = await getprofileInfo(); 
          if (profileInfo) {
            setUserName(profileInfo?.user?.username);
            setUserEmail(profileInfo?.user?.email);
            setBio(profileInfo?.user?.bio)
            setUploadedImage(profileInfo?.user?.avatar)
            setSelectedCountry(profileInfo?.user?.country)
           console.log(profileInfo)
          }
      } catch (error) {
        console.error('Error fetching profile info:', error);
      }
    };

    fetchData();
  }, []);
  const handleImageUploadD = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files?.[0];
  
    if (file) { 
      try {
        const response = await uploadImage(file);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };
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
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        const formattedCountries = data.map((country: any) => ({
          name: country.name.common,
          code: country.cca2,
        }));

        setFetchedCountries(formattedCountries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUploadD(event);
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      console.log('Uploaded file:', file);
    }
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
  const handleUpdateClick = async () => {
    try {
      await updateUserInfo({ userName, email: userEmail, bio: Bio, country: selectedCountry });
      setSuccessMessage('Information saved successfully')
    } catch (error) {
      console.error('Error Update User:', error);
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
          width: '40vw',
          height: '80vh', 
          bgcolor: '#fff',
          boxShadow: 24,
          p: 4,
          overflow: 'hidden',
        }}
      >

        <Button sx={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: '#333' }} onClick={onClose}
        component={Link} to={'/profile'}>
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
                <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
              <label htmlFor="upload-image">
              <img
                src={uploadedImage} 
                alt="Profile"
                width="120"
                height="120"
                style={{ borderRadius: '50%', objectFit: 'cover', cursor: 'pointer' }}
              />
              <input
                id="upload-image"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
            </label>
            <label htmlFor="upload-image">
              <Button
                variant="contained"
                startIcon={<CloudUploadIcon />}
                component="span"
                sx={{ width: '120px', height: '30px', cursor: 'pointer' }}
                onClick={(event: React.MouseEvent<HTMLSpanElement>) => {
                  const input = document.getElementById('upload-image');
                  input?.click();
                }}    
                      >
                Upload
              </Button>
            </label>
          </Box>
          {successMessage && (
                       <Typography variant="body2"sx={{ width: '210px',backgroundColor:'#40bf9c',padding:'5px',color:'#fff' }}>
                        {successMessage}
                      </Typography>
                          )}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px',paddingTop:'4px' }}>
                <TextField label="Name" value={userName} sx={{ mb: 4, width: '300px', height: '25px' }} />
                <TextField label="E-mail" value={userEmail} sx={{ mb: 4, width: '300px', height: '25px' }} />
                <TextField label="Bio" value={Bio} sx={{ mb: 4,width:'300px',height:'25px'}}
                  onChange={(e) => {
                    setBio(e.target.value); 
                  }}/>
                <FormControl fullWidth sx={{ width: '300px' }}>
    <InputLabel htmlFor="country-select">Country</InputLabel>
    <Select
      labelId="country-select"
      id="country-select"
      value={selectedCountry}
      onChange={handleCountryChange}
      IconComponent={ExpandMoreIcon}
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        PaperProps: {
          style: {
            maxHeight: '200px',
            width: '180px', 
          },
        },
      }}
    >
      {fetchedCountries.map((country) => (
        <MenuItem key={country.code} value={country.name}>
          <ReactCountryFlag countryCode={country.code} svg />
          {country.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
                         
                <Button variant="contained" color="primary" sx={{width:"50%",display:"flex",justifyContent: 'center',
              alignItems: 'center',}} onClick={handleUpdateClick}>
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
                       <Typography variant="body2"sx={{ width: '210px',backgroundColor:'#40bf9c',padding:'5px',color:'#fff' }}>
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
