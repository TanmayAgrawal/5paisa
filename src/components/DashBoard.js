import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Home,ShowChart,ShoppingCart,Settings, PowerSettingsNew,Person, CenterFocusStrong} from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import sidebar from './sidebar.jpg'
import {Link} from 'react-router-dom'
import { Select,MenuItem,TextField } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeFragment from './HomeFragment'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },

  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: "#fefefe"
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  blackColor:{
    backgroundColor:"#000000"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

 
  appBar: {
    // alignItems : 'center',

    zIndex: theme.zIndex.drawer + 1,
    color: 'black',
    backgroundColor : "#e0e0e0",
    textShadow : 'grey',
    textAlign : 'center',
    backgroundImage: "url(https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/v4vapid/9MW59rEj-Stonks7.gif)",
    
  },
  image:{
    height: "70px",
    width: "70px"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: "700px",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: "url("+sidebar+")",
    color:"#ffffff"
  },
  drawerContainer: {
    overflow: '',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  whiteColor:{
    color : "#fefefe"
  }
}));

export default function ClippedDrawer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    {/* <div className={classes.root}> */}
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src="https://contacts.zoho.com/file?ot=8&t=serviceorg&ID=62047589" className={classes.image}/>
          <Typography className={classes.title} variant="h4" noWrap>
            5 Paisa
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>


      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{paper: classes.drawerPaper,}}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button >

              <Home/>
              <Typography className={classes.root}>
                <Link to='/' className={classes.whiteColor}>
                  <ListItemText primary="Home" />
                </Link>
              </Typography>
            </ListItem>
            <ListItem button >

              <Person/>
              <Typography className={classes.root}>
                <Link to='/profile' className={classes.whiteColor}>
                  <ListItemText primary="Profile" />
                </Link>
              </Typography>
            </ListItem>
            <ListItem button >
              <ShoppingCart/>
              <ListItemText primary="Orders" />
              <Select className={classes.whiteColor} labelId="label" id="select" value="1">
                <MenuItem  value="1">N/A</MenuItem>
                <Typography className={classes.root}>
                <Link to = '/orders'>
                  <MenuItem value="10">Orders</MenuItem>
                </Link>
                </Typography>
                <Typography className={classes.root}>
                <Link to="/orderstatus">
                  <MenuItem value="10">Order Status</MenuItem>
                </Link>
                </Typography>
              </Select>
            </ListItem>
            <ListItem button >
               <ShowChart/>
                <ListItemText primary="Holdings" />
                <Select className={classes.whiteColor} labelId="label" id="select" value="1">
               
                   <MenuItem value="1">N/A</MenuItem>
                   <Typography className={classes.root}>
                      <Link to="/funds">
                        <MenuItem value="10">Funds</MenuItem>
                      </Link>
                  </Typography>
                  <Typography className={classes.root}>
                      <Link to="/holdings">
                        <MenuItem value="10">Holdings</MenuItem>
                      </Link>
                  </Typography>   
                </Select>
              </ListItem>
            <ListItem button >
               <Settings/>
               <Typography className={classes.root}>
              <Link to="/positions" className={classes.whiteColor}>
              <ListItemText primary="Position" />
              </Link>
             
            </Typography>
              </ListItem>
              <ListItem button onClick={props.logout}>
               <PowerSettingsNew/>
                <Typography className={classes.root}>
                <Link to="/logout" className={classes.whiteColor} >
              <ListItemText primary="Logout"/>
              </Link>
             
            </Typography>
              </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
      

      <main className={classes.content} >
        <Toolbar />    
        <HomeFragment/>  
      </main>

    {/* </div> */}
    <div>
       
    </div>
    </div>
  );
}
