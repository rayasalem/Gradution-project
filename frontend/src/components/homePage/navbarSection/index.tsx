import React, { useState ,useEffect} from 'react';
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
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import { useAuth } from '../../AuthContext';
import { getprofileInfo } from '../../../api/userAction';
import './navbar.css'
const Navbar: React.FC = () =>{
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [uploadedImage, setUploadedImage] = useState('/images/user.png');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [userName, setUserName] = useState('');
  const history =useNavigate();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { authenticated } = useAuth();
  const toggleDrawer = (open: boolean) => { setDrawerOpen(open);  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => { setAnchorEl(event.currentTarget); };
  const handleSignIn= (event: React.MouseEvent<HTMLElement>) =>{ history('/signin'); }
  const handleMainpage= (event: React.MouseEvent<HTMLElement>) =>{ history('/'); }
  const handleCoursepage= (event: React.MouseEvent<HTMLElement>) =>{ history('/learn'); }
  const handleDiscuss= (event: React.MouseEvent<HTMLElement>) =>{ history('/discuss'); }
  const handleBlog= (event: React.MouseEvent<HTMLElement>) =>{ history('/Blogs'); }
  const handlecompiler  = (event: React.MouseEvent<HTMLElement>) => { history('/Compiler') };
  const handleLeaderboardpage  = (event: React.MouseEvent<HTMLElement>) => { history('/leaderboard') };
  const handleSignUp = (event: React.MouseEvent<HTMLElement>) => {
    history('/signup');
  };  
  const handleSettings = (event: React.MouseEvent<HTMLElement>) => {
     history('/profile/settings');
  }; 
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
          const profileInfo = await getprofileInfo(); 
          if (profileInfo) {
            setUserName(profileInfo?.user?.username);
            setUploadedImage(profileInfo?.user?.avatar || '')
                       console.log(profileInfo)
          }
      } catch (error) {
        console.error('Error fetching profile info:', error);
      }
    };

    fetchData();
  }, []);
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
            Devloom </Typography>
            
        </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="fixed"  sx={{ marginTop:0,background: '#f9f9fa',height:'10vh',width: '100vw',padding:'5px',top: 0, left: 0, right: 0 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h3" component="div" >
          <Button onClick={handleMainpage} className='title' sx={{ left: 0,color:'black' ,fontSize:"25px"}}>
          <img src='./images/logo.png' width={'200px'} height={'100px'}/>
          </Button>
          </Typography>
            <div style={{ display: 'flex', gap: '10px' }}>
            <Button className="item" onClick={handlecompiler}>Compilers </Button>
              <Button className="item" onClick={handleBlog}>Blog</Button>
      {authenticated ?( <>
        <Button className="item" onClick={handleDiscuss}>Discuss</Button>

        <Button onClick={handleCoursepage} className="item">
              Courses
              </Button>
              <Button onClick={handleLeaderboardpage} className="item">
              Leaderboard
              </Button>
              <Tooltip title="Account settings">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar sx={{ width: 32, height: 32 }} alt={userName} src={uploadedImage}></Avatar>
            
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
             <span className='userName'>{userName}</span>
             <Link href='/profile' className='Link'>Go to profile</Link>
             <Divider />
             <MenuItem onClick={handleSettings}>
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
        <Button className="item" >Discuss</Button>
        <Button className="item">
              Courses
              </Button>
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
    <ListItem button  className="item"sx={{width:'auto'}} onClick={handlecompiler}>
                Compilers 
            </ListItem>
              <ListItem button onClick={() => toggleDrawer(false)}>
            
    </ListItem>
    
    <ListItem button onClick={() => toggleDrawer(false)}>
      <Button className="item" onClick={handleBlog}>Blog</Button>
    </ListItem>
    {authenticated ? (
    <> 
    <ListItem button onClick={() => toggleDrawer(false)}>
      <Button className="item" onClick={handleDiscuss}>Discuss</Button>
    </ListItem>
    <ListItem button onClick={() => toggleDrawer(false)}>
    <Button onClick={handleCoursepage} className="item">
              Courses
              </Button></ListItem>
              <ListItem button onClick={() => toggleDrawer(false)}>
              <Button onClick={handleLeaderboardpage} className="item">
              Leaderboard
              </Button></ListItem>
    <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <Avatar sx={{ width: 32, height: 32 }} alt={userName} src={uploadedImage}></Avatar>

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
          <span className='userName'>{userName}</span>
          <Link href='/profile' className='Link'>Go to profile</Link>
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
    <Button className="item">Courses</Button>
    </ListItem>
    <ListItem button onClick={() => toggleDrawer(false)}>
    <Button className="item" >Discuss</Button>
    </ListItem>
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