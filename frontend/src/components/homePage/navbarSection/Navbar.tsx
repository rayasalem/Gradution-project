import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import './navbar.css'
const Navbar: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [coursesAnchorEl, setCoursesAnchorEl] = useState<null | HTMLElement>(null);
  const [programmingLangageAnchorEl, setProgrammingLangageAnchorEl] = useState<null | HTMLElement>(null);
  const history =useNavigate();

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };
  const handleCoursesOpen = (event: React.MouseEvent<HTMLElement>) => {
    setCoursesAnchorEl(event.currentTarget);
  };
  const handleProgrammingLangageOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProgrammingLangageAnchorEl(event.currentTarget);
  };
  const handleSignIn= (event: React.MouseEvent<HTMLElement>) =>{
    history('/signin');
  }
  const handleSignUp= (event: React.MouseEvent<HTMLElement>) =>{
    history('/signUp');
  }
  const handleMenuClose = () => {
    setCoursesAnchorEl(null);
    setProgrammingLangageAnchorEl(null);
  };
  return (
    <div>
      {isSmallScreen ? (
        <AppBar  position="fixed"  sx={{ background: '#f9f9fa', width: '100vw',padding:'5px',top: 0, left: 0, right: 0 }}>
        <Toolbar>
          <IconButton
            edge="start"
            sx={{
              color: '#3CB371',
              '& .MuiSvgIcon-root': {
                fontSize: '2rem', 
              },
            }}aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
           <Typography variant="h5" component="div" className='title' sx={{ left: 0 }}>
            Devloem
           </Typography>
        </Toolbar>
      </AppBar>
      ) : (
        <AppBar position="fixed"  sx={{ background: '#f9f9fa', width: '100vw',padding:'5px',top: 0, left: 0, right: 0 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" component="div" className='title' sx={{ left: 0 }}>
           Devloem
           </Typography>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Button onClick={handleCoursesOpen} className="item">
                Full Path
                <ArrowDropDownIcon></ArrowDropDownIcon>
                {Boolean(coursesAnchorEl) && <div className="test"></div>}
              </Button>
              <Button onClick={handleProgrammingLangageOpen} className="item">
                Categories
                <ArrowDropDownIcon></ArrowDropDownIcon>
                {Boolean(programmingLangageAnchorEl) && <div className="test"></div>}
              </Button>
              <Menu
         id="fade-menu"
         MenuListProps={{
           'aria-labelledby': 'fade-button',
         }}
          anchorEl={coursesAnchorEl}
          open={Boolean(coursesAnchorEl)}
          onClose={handleMenuClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleMenuClose}className='groupItem'>Web Development</MenuItem>
          <MenuItem onClick={handleMenuClose}className='groupItem'>Python Developer</MenuItem>
          <MenuItem onClick={handleMenuClose}className='groupItem'>Coding Foundation</MenuItem>
          <MenuItem onClick={handleMenuClose}className='groupItem'>Data Programming</MenuItem>
          <MenuItem onClick={handleMenuClose}className='groupItem'>Web Developer with Angular</MenuItem>
        </Menu>
        <Menu 
         id="fade-menu"
         MenuListProps={{
           'aria-labelledby': 'fade-button',
         }}
            anchorEl={programmingLangageAnchorEl}
            open={Boolean(programmingLangageAnchorEl)}
            onClose={handleMenuClose}
            TransitionComponent={Fade}
          >
          <MenuItem onClick={handleMenuClose}className='groupItem'>Beginner</MenuItem>
          <MenuItem onClick={handleMenuClose}className='groupItem'>Intermediate</MenuItem>
        </Menu>
              <Button className="item">Code Compiler</Button>
              <Button className="item">Discuss</Button>
              <Button className="item">Blog</Button>
              <Button className="item" onClick={handleSignUp}>
                Sign Up
              </Button>
              <Button className="item" onClick={handleSignIn}>
                Sign In
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      )}
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
    <ListItem button onClick={() => toggleDrawer(false)}>
      <Button className="item" onClick={handleSignUp}>Sign Up</Button>
    </ListItem>
    <ListItem button onClick={() => toggleDrawer(false)}>
      <Button className="item" onClick={handleSignIn}>Sign In</Button>
    </ListItem>
  </List>
</Drawer>
    </div>
  );
};
export default Navbar;