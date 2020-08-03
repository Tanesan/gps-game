import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: 512,
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
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

      <main className={classes.content}>
        <div className={classes.toolbar} />

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
      <Box fontSize="h4.fontSize" mb="1rem" className="settingpublic">
        Public info
        </Box>
        <Box fontWeight={500}>
        If you want to change your name ,please write here.
        </Box>
        <form className="settingform" className="settingform" autoComplete="off">
        <Grid container>
<Grid item sm={12} md={6}>
          <Box mt="4rem" mb="2rem">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
</Box>
<input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
        <label htmlFor="contained-button-file">
<Button
        variant="contained"
        color="default"
        component="span"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      </label>
      </Grid>
      <Grid item sm={12} md={6}>
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
          defaultValue=""
          variant="outlined"
        />
        </Box>
        <Box mt="1rem">
        <Button variant="contained" color="primary">
  Save Changes
</Button>
</Box>
</Grid>
</Grid>
      </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Box fontSize="h4.fontSize" mb="1rem">
        Password
        </Box>
        <Box fontWeight={500}>
        If you want to change your password ,please write here.
        </Box>
      <form className={classes.root} className="settingform" autoComplete="off">
        <Box mt="1rem">
      <TextField id="Password" 
              label="Password"
              margin="normal"
              type="password"
              required
              fullWidth
              autoFocus
               />
               </Box>
        <Box mt="1rem">
                 <TextField id="Password" 
              label="確認"
              margin="normal"
              type="password"
              required
              fullWidth
               />
               </Box>
        <Box mt="1rem">

<Button variant="contained" color="primary">
  Save Changes
</Button>
</Box>
</form>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Box fontSize="h4.fontSize" mb="1rem">
      Privacy and safety
      </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Box fontSize="h4.fontSize" mb="1rem">
      Email notifications
      </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Box fontSize="h4.fontSize" mb="1rem">
      Web notifications
      </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Box fontSize="h4.fontSize" mb="1rem">
      Your data
      </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Box fontSize="h4.fontSize" mb="1rem">
      Delete account
      </Box>
      <Box fontWeight={500}>
        If you want to delete account ,please check here.
        </Box>
        <Box mt="1rem">
        <Button variant="contained" color="secondary">
  Delete Account
</Button>
</Box>
      </TabPanel>
    </div>
      </main>
  );
}