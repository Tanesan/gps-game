import React from 'react';
import clsx from 'clsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TimelineIcon from '@material-ui/icons/Timeline';
import GroupIcon from '@material-ui/icons/Group';
import MapIcon from '@material-ui/icons/Map';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import SettingsIcon from '@material-ui/icons/Settings';
import MiniDrawers from './top.js';
import Analytics from './analytics.js';
import Friends from './friends.js';
import Quests from './quests.js';
import Maps from './maps.js';
import Settings from './settings.js';
import SignIn from './Login.js';
import SignUp from './Signup.js';
import './App.css';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const preventDefault = (event) => event.preventDefault();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
       <link rel="stylesheet" href="https://use.typekit.net/aed6xos.css"></link>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="toplogo" variant="h6" noWrap>
         {// <Link href="/top" onClick={preventDefault} color="inherit" rel="noreferrer" variant="inherit"> 
         } Unique Nauts
        {//   </Link>  
 } </Typography>

 <Button href="/login" color="inherit" className="menulogin">Login</Button>
  
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['DashBoad', 'Analytics', 'Friends', 'Map','Settings', 'Setting'].map((text, index) => (
        index === 0 ?
            <ListItemLink href="/top" key={text} rel="noreferrer">
              <ListItemIcon>
              <Badge badgeContent={4} color="primary">
              <DashboardIcon />
              </Badge>
              </ListItemIcon>
              <ListItemText primary={text} />
              </ListItemLink>
        :index === 1 ?          
              <ListItemLink href="/analytics" key={text} rel="noreferrer">
              <ListItemIcon>
              <Badge badgeContent={99999} color="secondary">
                <TimelineIcon  />
                </Badge>
                </ListItemIcon>
              <ListItemText primary={text} />
              </ListItemLink>
                :index === 2 ?
                <ListItemLink href="/friends" key={text} rel="noreferrer">
                <ListItemIcon>
                <GroupIcon />
                </ListItemIcon>
              <ListItemText primary={text} />
              </ListItemLink>
                :index === 3 ?
              <ListItemLink href="/map" key={text} rel="noreferrer">
            <ListItemIcon>
                <MapIcon />
                </ListItemIcon>
              <ListItemText primary={text} />
              </ListItemLink>
                :index === 4 ?
                <ListItemLink href="/quests" key={text} rel="noreferrer">
              <ListItemIcon>
                <AccountTreeIcon />
                </ListItemIcon>
              <ListItemText primary={text} />
              </ListItemLink>
                :
                <ListItemLink href="/settings" key={text} rel="noreferrer">
                <ListItemIcon>
                <SettingsIcon />
                </ListItemIcon>
              <ListItemText primary={text} />
              </ListItemLink>
            
        //   </ListItem> 
          ))}
        </List>
      </Drawer>
      <Router>
          <div className="formchoice">
          <Route path='/top' component={MiniDrawers}/>
          <Route path='/analytics' component={Analytics}/>
           <Route path='/friends' component={Friends} />
            <Route path='/map' component={Maps} />
           <Route path='/quests' component={Quests} />
           <Route path='/settings' component={Settings} />
           <Route path='/login' component={SignIn}/>
           <Route path='/signup' component={SignUp}/>
          </div>
        </Router>
    </div>
  );
}