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
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 512,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



export default function Settings(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Settings
        </Typography>
        <div className={classes.root}>
        <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        indicatorColor="primary"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Account" {...a11yProps(0)} />
        <Tab label="Password" {...a11yProps(1)} />
        <Tab label="Privacy and safety" {...a11yProps(2)} />
        <Tab label="Email notifications" {...a11yProps(3)} />
        <Tab label="Web notifications" {...a11yProps(4)} />
        <Tab label="Your data" {...a11yProps(5)} />
        <Tab label="Delete account" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Box fontSize="h4.fontSize" mb="1rem">
        Public info
        </Box>
        <Box fontWeight={500}>
        If you want to change your name ,please write here.
        </Box>
        <form className={classes.root} className="settingform" autoComplete="off">
        <Box mt="1rem">
      <TextField id="standard-basic" 
              label="Username"
              margin="normal"
              required
              fullWidth
              autoFocus
               />
</Box>
<Box mt="1rem">
      <TextField
          id="outlined-multiline-static"
          label="Biography"
          multiline
          rows={4}
          required
          fullWidth
          autoFocus
          defaultValue=""
          variant="outlined"
        />
        </Box>
        <Box mt="1rem">
        <Button variant="contained" color="primary">
  Save Changes
</Button>
</Box>
      </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Password
      </TabPanel>
      <TabPanel value={value} index={2}>
      Privacy and safety
      </TabPanel>
      <TabPanel value={value} index={3}>
      Email notifications
      </TabPanel>
      <TabPanel value={value} index={4}>
      Web notifications
      </TabPanel>
      <TabPanel value={value} index={5}>
      Your data
      </TabPanel>
      <TabPanel value={value} index={6}>
      Delete account
      </TabPanel>
    </div>
      </main>
  );
}