import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LogoOrange from '../assets/logo_orange.png';
import { useNavigate } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import { Avatar, Grid, Typography } from '@mui/material';

const MenuDrawer = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Grid
      sx={{
        color: 'black',
        // backgroundColor: 'rgba(229, 231, 235',
        height: '100vh',
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: '.5rem',
          marginTop: '1rem',
          marginBottom: '2rem'
        }}
      >
        <Avatar src={LogoOrange} variant="square" sx={{ width: '80%' }} />
      </Grid>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={'Home'}
            onClick={() => {
              // history.push(`/about`);
              navigate('/');
            }}
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AutoAwesomeIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={'About me'}
            onClick={() => {
              // history.push(`/about`);
              navigate('/about');
            }}
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ImportContactsIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={'Projects'}
            onClick={() => {
              // history.push(`/about`);
              navigate('/projects');
            }}
          />
        </ListItemButton>
        {/* <ListItemButton>
          <ListItemIcon>
            <EmailIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={'Get in touch'}
            onClick={() => {
              console.log('hi');
            }}
          />
        </ListItemButton> */}
      </List>
    </Grid>
  );
  return (
    <div>
      <React.Fragment key={'right'}>
        <Button onClick={toggleDrawer('right', true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default MenuDrawer;
