import React,{Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
	},
	listColor: {
		backgroundColor: "#f5f5f5",
	},
	redColor: {
		color : "#d32f2f"
	},
	greenColor: {
		color: "#4caf50"
	}
}));

function WatchListComp(props){
	const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
	};
	return (
		<List className= {classes.listColor}>
           
			<ListItem button onClick={handleClick}>
				<ListItemText primary={props.name}/>
				<ListItemText className={props.change<0 ? classes.redColor : classes.greenColor} 
				primary={props.change+"%"}/>
				<ListItemText className={props.change<0 ? classes.redColor : classes.greenColor} 
				primary={"INR "+props.price}/>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <Button variant="outlined" color="primary">Buy</Button>
						<Button variant="outlined" color="secondary">Sell</Button>
          </ListItem>
        </List>
      </Collapse>
		</List>
	)
}

export default WatchListComp