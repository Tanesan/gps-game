import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import StarIcon from '@material-ui/icons/Star';
import SecurityIcon from '@material-ui/icons/Security';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CardActionArea from '@material-ui/core/CardActionArea';


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
  return (

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box fontSize="h5.fontSize" mb="1rem">
          Welcome Back,Mr.aaa.
        </Box>



        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
        <CardActionArea>
            <Box boxShadow={10} borderRadius="5%" className="boxcolor" href="/">
            <Grid container>
        <Grid item xs={6} sm={3}> 
        <Box my="10%">
            <DirectionsRunIcon style={{ fontSize: 50, color: "#3399FF" }} />
            </Box>
            </Grid>
            <Grid item xs={6} sm={9}> 
            <Box className="number" fontSize="h4.fontSize">
            1,000
            </Box>
            <Box fontSize={16}>
            Ranking
            </Box>
            </Grid>
            </Grid>
                </Box>
                </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <CardActionArea>
        <Box boxShadow={10} borderRadius="5%" className="boxcolor">
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
                </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <CardActionArea>
        <Box boxShadow={10} borderRadius="5%" className="boxcolor">
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
                </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <CardActionArea>
        <Box boxShadow={10} borderRadius="5%" className="boxcolor">
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
                </CardActionArea>
        </Grid>
        </Grid>


        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Box boxShadow={10} borderRadius="5%" className="boxcolor">
        <CardActionArea>
            Statistics
        </CardActionArea>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box boxShadow={10} borderRadius="5%" className="boxcolor">
        <CardActionArea>
            Quest 受注
          </CardActionArea>
        </Box>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <Box boxShadow={10} borderRadius="5%" className="boxcolor">
        <CardActionArea>
            最後に訪れた店
         </CardActionArea>
        </Box>
        </Grid>
        </Grid>
      </main>
  );
}