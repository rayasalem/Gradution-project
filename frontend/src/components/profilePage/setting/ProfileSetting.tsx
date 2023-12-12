import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography, TextField, Button,
   MenuItem, Select, FormControl, InputLabel } from '@mui/material';import Modal from '@mui/material/Modal';
import { SelectChangeEvent } from '@mui/material/Select';

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

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };
  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCountry(event.target.value);
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
          height: '65vh', 
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
                        
                        <input type="file" id="upload-photo" />

                        <Button variant="outlined" sx={{ marginLeft: 2 }}>
                          Upload new photo
                        </Button>
                        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                          Allowed JPG, PNG. Max size of 800K
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ p: 2 }}>
                      <TextField label="Name" sx={{ mb: 1 }}  />
                      <TextField label="E-mail" sx={{ mb: 1 }}  />
                      <TextField label="Bio" sx={{ mb: 1 }}  />
                      <FormControl fullWidth sx={{ mb: 1 }}>
                <InputLabel htmlFor="country-select" sx={{width:'50px'}}>Country</InputLabel>
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
                     <TextField label="Current Password" type="password" sx={{ mb: 1 }} />
                    <TextField label="New Password" type="password" sx={{ mb: 1 }} />
                     <Button variant="contained" sx={{width:'150px'}}>Change</Button>
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
                      <Button variant="contained" >
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
