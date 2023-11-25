import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { Link, useMediaQuery,Box } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import { useAuth } from '../../AuthContext';
import { FULL_PATH,CATEGORIES,COMPILER_LANGUAGES } from './constant';
import './navbar.css'
const Navbar: React.FC = () =>{
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [coursesAnchorEl, setCoursesAnchorEl] = useState<null | HTMLElement>(null);
  const [programmingLangageAnchorEl, setProgrammingLangageAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const history =useNavigate();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { authenticated } = useAuth();
  const toggleDrawer = (open: boolean) => { setDrawerOpen(open);  };
  const handleCoursesOpen = (event: React.MouseEvent<HTMLElement>) => { setCoursesAnchorEl(event.currentTarget); };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => { setAnchorEl(event.currentTarget); };
  const handleProgrammingLangageOpen = (event: React.MouseEvent<HTMLElement>) => { setProgrammingLangageAnchorEl(event.currentTarget); };
  const handleSignIn= (event: React.MouseEvent<HTMLElement>) =>{ history('/signin'); }
  const handleMainpage= (event: React.MouseEvent<HTMLElement>) =>{ history('/'); }
  const handlecompilerOpen  = (event: React.MouseEvent<HTMLElement>) => { setCompilerCategoryAnchorEl(event.currentTarget); };

  const handleSignUp = (event: React.MouseEvent<HTMLElement>) => {
    history('/signup');
  };  
  const handleMenuClose = () => {
    setCoursesAnchorEl(null);
    setProgrammingLangageAnchorEl(null);
    setCompilerCategoryAnchorEl(null)
    setAnchorEl(null);
  };
  const [compilerCategoryAnchorEl, setCompilerCategoryAnchorEl] = useState<null | HTMLElement>(null);


  const [compilerCategoryOpen, setCompilerCategoryOpen] = useState<boolean>(false);
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  return (
    <div>
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0 ,marginTop:0,zIndex:'1000'}}>
      {isSmallScreen ? (
        <AppBar  position="fixed"  sx={{ marginTop:0,background: '#f9f9fa',height:'10vh', width: '100vw',padding:'5px',top: 0, left: 0, right: 0 }}>
        <Toolbar>
          <IconButton
            edge="start"
            sx={{color: '#3CB371','& .MuiSvgIcon-root': {fontSize: '2rem',},}}
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
          <MenuIcon />
          </IconButton>
           <Typography variant="h5" component="div" className='title' sx={{ left: 0 }}>
            Devloem </Typography>
        </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="fixed"  sx={{ marginTop:0,background: '#f9f9fa',height:'10vh',width: '100vw',padding:'5px',top: 0, left: 0, right: 0 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" component="div" className='title' sx={{ left: 0 }}>
           Devloem </Typography>
            <div style={{ display: 'flex', gap: '10px' }}>
            <Button onClick={handleMainpage} className="item">
              HomePage
              </Button>
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
                MenuListProps={{'aria-labelledby': 'fade-button',}}
                anchorEl={coursesAnchorEl}
                open={Boolean(coursesAnchorEl)}
                onClose={handleMenuClose}
                TransitionComponent={Fade} >
                    {FULL_PATH.map((path) => (
            <MenuItem key={path} className='groupItem' onClick={() => handleMenuClose}>
              {path}
            </MenuItem>))}
                 <Link href="/learn" className='link'>View full catalog</Link>
              </Menu>
              <Menu 
                id="fade-menu"
                MenuListProps={{'aria-labelledby': 'fade-button',}}
                anchorEl={programmingLangageAnchorEl}
                open={Boolean(programmingLangageAnchorEl)}
                onClose={handleMenuClose}
                TransitionComponent={Fade}>
              {CATEGORIES.map((category) => (
            <MenuItem key={category} className='groupItem' onClick={() => handleMenuClose}>
              {category} 
            </MenuItem>))}
                <Link href="/learn" className='link'>View full catalog</Link>
              </Menu>
            
              <ListItem button onClick={handlecompilerOpen} className="item"sx={{width:'auto'}}>
                Compilers <ArrowDropDownIcon />
            </ListItem>
            
              <Menu
              anchorEl={compilerCategoryAnchorEl}
              open={Boolean(compilerCategoryAnchorEl)}
                onClose={handleMenuClose}
                TransitionComponent={Fade}
                style={{ position: 'absolute'}}
              >
              {COMPILER_LANGUAGES.map((lang) => (
            <MenuItem key={lang.language} onClick={() => handleMenuClose}>
              <Link href={lang.link}>{lang.language} Compiler</Link>
            </MenuItem>))}
              </Menu>
              <Button className="item">Discuss</Button>
              <Button className="item">Blog</Button>
      {authenticated ?( <>
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
             </ListItemIcon>Settings
             </MenuItem>
             <MenuItem onClick={handleLogout}>
             <ListItemIcon>
             <Logout fontSize="small" />
             </ListItemIcon>Logout
             </MenuItem>
             </div>
          </Menu>
      </>):( <>
              <Button className="item" onClick={handleSignUp}>Sign Up</Button>
              <Button className="item" onClick={handleSignIn}>Sign In</Button>
              </>
              )} 
            </div>
          </Toolbar>
        </AppBar>
      )}     
<Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
  <List>
    <ListItem button onClick={handleCoursesOpen} className="item">Full Path
      <ArrowDropDownIcon />
    </ListItem>
    <Menu
                id="fade-menu"
                MenuListProps={{'aria-labelledby': 'fade-button',}}
                anchorEl={coursesAnchorEl}
                open={Boolean(coursesAnchorEl)}
                onClose={handleMenuClose}
                TransitionComponent={Fade} >
                    {FULL_PATH.map((path) => (
            <MenuItem key={path} className='groupItem' onClick={() => handleMenuClose}>
              {path}
            </MenuItem>))}
                 <Link href="/learn" className='link'>View full catalog</Link>
              </Menu>

    <ListItem button onClick={handleProgrammingLangageOpen} className="item">Categories
      <ArrowDropDownIcon />
    </ListItem>
    <Menu 
                id="fade-menu"
                MenuListProps={{'aria-labelledby': 'fade-button',}}
                anchorEl={programmingLangageAnchorEl}
                open={Boolean(programmingLangageAnchorEl)}
                onClose={handleMenuClose}
                TransitionComponent={Fade}>
              {CATEGORIES.map((category) => (
            <MenuItem key={category} className='groupItem' onClick={() => handleMenuClose}>
              {category} 
            </MenuItem>))}
                <Link href="/learn" className='link'>View full catalog</Link>
              </Menu>
    <ListItem button onClick={handlecompilerOpen} className="item"sx={{width:'auto'}}>
                Compilers <ArrowDropDownIcon />
            </ListItem>
              <Menu
             anchorEl={compilerCategoryAnchorEl}
             open={Boolean(compilerCategoryAnchorEl)}
               onClose={handleMenuClose}
               TransitionComponent={Fade}
               style={{ position: 'absolute'}}
             >
             {COMPILER_LANGUAGES.map((lang) => (
           <MenuItem key={lang.language} onClick={() => handleMenuClose}>
             <Link href={lang.link}>{lang.language} Compiler</Link>
           </MenuItem>))}
             </Menu>
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
          </ListItemIcon>Settings
          </MenuItem>
          <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>Logout
        </MenuItem>
        </div>
      </Menu>
    </>
    ):(<>
        <ListItem button onClick={() => toggleDrawer(false)}>
          <Button className="item" onClick={handleSignUp}>Sign Up</Button>
        </ListItem>
        <ListItem button onClick={() => toggleDrawer(false)}>
          <Button className="item" onClick={handleSignIn}>Sign In</Button>
        </ListItem>
      </>
    )}
  </List>
</Drawer>
</Box>
    </div>
  );
};
export default Navbar;