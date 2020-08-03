import React from 'react';
import clsx from 'clsx';
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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TimelineIcon from '@material-ui/icons/Timeline';
import GroupIcon from '@material-ui/icons/Group';
import MapIcon from '@material-ui/icons/Map';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import SettingsIcon from '@material-ui/icons/Settings';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import StarIcon from '@material-ui/icons/Star';
import SecurityIcon from '@material-ui/icons/Security';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { spacing } from '@material-ui/system';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Welcome Back,Mr.aaa.
        </Typography>



        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
            <Box boxShadow={3} borderRadius="5%" className="boxcolor">
            <Grid container>
        <Grid item xs={6} sm={3}> 
        <Box my="10%">
            <DirectionsRunIcon style={{ fontSize: 50, color: "#3399FF" }} />
            </Box>
            </Grid>
            <Grid item xs={6} sm={9}> 
            <Box fontSize="h4.fontSize">
            1,000
            </Box>
            <Box fontSize={16}>
            Ranking
            </Box>
            </Grid>
            </Grid>
                </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Box boxShadow={3} borderRadius="5%" className="boxcolor">
       <Box mx="auto">
            <Grid container>
        <Grid item xs={6} sm={3}> 
        <Box my="10%">
            <StarIcon style={{ fontSize: 50, color: "#3399FF" }} />
            </Box>
            </Grid>
            <Grid item xs={6} sm={9}> 
            <Box fontSize="h4.fontSize">
            SSS
            </Box>
            <Box fontSize={16}>
            Rank
            </Box>
            </Grid>
            </Grid>
            </Box>
                </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Box boxShadow={3} borderRadius="5%" className="boxcolor">
            <Grid container>
        <Grid item xs={6} sm={3}> 
        <Box my="10%">
            <SecurityIcon style={{ fontSize: 50, color: "#3399FF" }} />
            </Box>
            </Grid>
            <Grid item xs={6} sm={9}> 
            <Box fontSize="h4.fontSize">
            1,000
            </Box>
            <Box fontSize={16}>
            Running(m/day)
            </Box>
            </Grid>
            </Grid>
                </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Box boxShadow={3} borderRadius="5%" className="boxcolor">
            <Grid container>
        <Grid item xs={6} sm={3}> 
        <Box my="10%">
            <AccountBalanceIcon style={{ fontSize: 50, color: "#3399FF" }} />
            </Box>
            </Grid>
            <Grid item xs={6} sm={9}> 
            <Box fontSize="h4.fontSize">
            1,000
            </Box>
            <Box fontSize={16}>
            Running(m/day)
            </Box>
            </Grid>
            </Grid>
                </Box>
        </Grid>
        </Grid>


        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Box boxShadow={3} borderRadius="5%" className="boxcolor">
            Statistics
        </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box boxShadow={3} borderRadius="5%" className="boxcolor">
            Quest 受注
        </Box>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <Box boxShadow={3} borderRadius="5%" className="boxcolor">
            最後に訪れた店
        </Box>
        </Grid>
        </Grid>
      </main>
  );
}