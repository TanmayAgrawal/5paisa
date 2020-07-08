import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import WatchList from './WatchList'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import OrderStatus from './OrderStatus';
import Orders from './Orders';
import Holdings from './Holdings';
import Position from './Positions';
import Funds from './Funds';
import Profile from './Profile';
import Logout from './Logout';
import LoginForm from './LoginForm';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function HomeFragment(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="" {...a11yProps(0)} />
          {/* <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Router>
          <Switch>
            <Route path= "/" exact component= {WatchList} />
            <Route path= "/orders" component= {Orders}/>
            <Route path= "/holdings" component={Holdings} />
            <Route path= "/positions" component={Position} />
            <Route path= "/funds" component= {Funds} />
            <Route path= "/profile" component= {Profile} />
            <Route path= "/orderstatus" component= {OrderStatus} />
            <Route path= "/logout" component= {Logout}/>
          </Switch>
        </Router>
      </TabPanel>
     
     
    </div>
  );
}
