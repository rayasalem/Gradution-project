import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { Link } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const AppBarSection: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
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
      {isSmallScreen ? (
        <AppBar position="fixed" sx={{ background: '#f9f9fa', width: '100vw', padding: '5px', top: 0, left: 0, right: 0 }}>
          <Toolbar>
            <IconButton
              edge="start"
              sx={{
                color: '#3CB371',
                '& .MuiSvgIcon-root': {
                  fontSize: '2rem',
                },
              }}
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" component="div" className="title" sx={{ left: 0 }}>
              Devloem
            </Typography>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="fixed" sx={{ background: '#f9f9fa', width: '100vw', padding: '5px', top: 0, left: 0, right: 0 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5" component="div" className="title" sx={{ left: 0 }}>
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
              {/* Other buttons */}
              {authenticated ? (
                <>
                  <Tooltip title="Account settings">
                    <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                      <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                    </IconButton>
                  </Tooltip>
                  {/* Account menu */}
                  <Menu
                    className="MuiPaper-root"
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    onClick={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  >
                    <div className="impo">
                      <span className="userName">Bessan Tomeh </span>
                      <Link href="/" className="Link">
                        Go to profile
                      </Link>
                      <Divider />
                      <MenuItem onClick={handleMenuClose}>
                        {/* Settings icon */}
                        Settings
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        {/* Logout icon */}
                        Logout
                      </MenuItem>
                    </div>
                  </Menu>
                </>
              ) : (
                <>
                  <Button className="item" onClick={handleSignUp}>
                    Sign Up
                  </Button>
                  <Button className="item" onClick={handleSignIn}>
                    Sign In
                  </Button>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};

export default AppBarSection;
