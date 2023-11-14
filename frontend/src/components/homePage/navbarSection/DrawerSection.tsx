import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useMediaQuery } from '@mui/material';
import Fade from '@mui/material/Fade';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

const DrawerSection = () => {
    const history = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [coursesAnchorEl, setCoursesAnchorEl] = useState<null | HTMLElement>(null);
    const [programmingLangageAnchorEl, setProgrammingLangageAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { authenticated } = useAuth();
    const toggleDrawer = (open: boolean) => {
      setDrawerOpen(open);
    };
    const handleCoursesOpen = (event: React.MouseEvent<HTMLElement>) => {
      setCoursesAnchorEl(event.currentTarget);
    };
    const handleProgrammingLangageOpen = (event: React.MouseEvent<HTMLElement>) => {
      setProgrammingLangageAnchorEl(event.currentTarget);
    };
    const handleSignIn = () => {
      history('/signin');
    };
  
    const handleSignUp = () => {
      history('/signup');
    };
  
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setCoursesAnchorEl(null);
      setProgrammingLangageAnchorEl(null);
      setAnchorEl(null);
    };
  return (
    <div>
              
<Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
  <List>
    <ListItem button onClick={handleCoursesOpen} className="item">
      Full Path
      <ArrowDropDownIcon />
    </ListItem>
    <Menu
      id="courses-menu"
      anchorEl={coursesAnchorEl}
      open={Boolean(coursesAnchorEl)}
      onClose={handleMenuClose}
      TransitionComponent={Fade}
      style={{ position: 'absolute' }}
    >
      <MenuItem onClick={handleMenuClose} className='groupItem'>Web Development</MenuItem>
      <MenuItem onClick={handleMenuClose} className='groupItem'>Python Developer</MenuItem>
      <MenuItem onClick={handleMenuClose} className='groupItem'>Coding Foundation</MenuItem>
      <MenuItem onClick={handleMenuClose} className='groupItem'>Data Programming</MenuItem>
      <MenuItem onClick={handleMenuClose} className='groupItem'>Web Developer with Angular</MenuItem>
      <Link href="/learn" className='link'>View full catalog</Link>
    </Menu>

    <ListItem button onClick={handleProgrammingLangageOpen} className="item">
      Categories
      <ArrowDropDownIcon />
    </ListItem>
    <Menu
      id="programming-langage-menu"
      anchorEl={programmingLangageAnchorEl}
      open={Boolean(programmingLangageAnchorEl)}
      onClose={handleMenuClose}
      TransitionComponent={Fade}
      style={{ position: 'absolute' }}
    >
      <MenuItem onClick={handleMenuClose} className='groupItem'>Beginner</MenuItem>
      <MenuItem onClick={handleMenuClose} className='groupItem'>Intermediate</MenuItem>
      <Link href="/learn" className='link'>View full catalog</Link>
    </Menu>
    <ListItem button onClick={() => toggleDrawer(false)}>
      <Button className="item">Code Compiler</Button>
    </ListItem>
    <ListItem button onClick={() => toggleDrawer(false)}>
      <Button className="item">Discuss</Button>
    </ListItem>
    <ListItem button onClick={() => toggleDrawer(false)}>
      <Button className="item">Blog</Button>
    </ListItem>
    {authenticated ? (
    <> 
    <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
              <Menu
                className='MuiPaper-root'
                anchorEl={anchorEl}
                id="account-menu"
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                onClick={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
         <div className='impo'>
          <span className='userName'>Bessan Tomeh </span>
          <Link href='/' className='Link'>Go to profile</Link>
         <Divider />
         <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        </div>
      </Menu>
    </>
    ):(<>
        <ListItem button onClick={() => toggleDrawer(false)}>
          <Button className="item" onClick={handleSignUp}>
            Sign Up
          </Button>
        </ListItem>
        <ListItem button onClick={() => toggleDrawer(false)}>
          <Button className="item" onClick={handleSignIn}>
            Sign In
          </Button>
        </ListItem>
      </>
    )}
  </List>
</Drawer>
    </div>
  )
}

export default DrawerSection