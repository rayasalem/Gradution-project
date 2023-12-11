import React, { useState } from 'react';
import { Box, Card, List, ListItem, ListItemText, Typography, TextField, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';

interface ProfileSettingsProps {
  open: boolean;
  onClose: () => void;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState('general');

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
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
          height: '60vh', 
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
                      <TextField label="Name" sx={{ mb: 1 }} defaultValue="Nelle Maxwell" />
                      <TextField label="E-mail" sx={{ mb: 1 }} defaultValue="nmaxwell@mail.com" />
                      <TextField label="Bio" sx={{ mb: 1 }} defaultValue="Describe yourself" />
                      <TextField label="country" sx={{ mb: 1 }} defaultValue=" " />
                        <Button variant="contained" color="primary">
                          Save changes
                        </Button>
                    </Box>
                  </div>
              )}

              {activeTab === 'password' && (
                
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6" sx={{ mb: 1 }}>Password</Typography>
                      <TextField label="Current Password" type="password" sx={{ mb: 1 }} />
                      <TextField label="New Password" type="password" sx={{ mb: 1 }} />
                       <Button variant="contained">Change</Button>
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
