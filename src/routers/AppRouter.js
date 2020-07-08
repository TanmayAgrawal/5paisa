import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios'
import LoginForm from '../components/LoginForm'
import DashBoard from '../components/DashBoard'

class AppRouter extends React.Component {
	constructor(props){
		super(props)
		this.submitLoginData = this.submitLoginData.bind(this);
		this.handleUserLogout = this.handleUserLogout.bind(this);
		this.state = {
			isLogged: false
		}
	}

	submitLoginData(email, dob, password) {
		const data = {email, dob, password}

		axios.post('/api/login', data).then(res => {
			console.log(res.data)
			if(!res.data.error) {
				this.intialiseUserData(res.data)
			}
			else alert('Invalid Credentials');
		})
	}

	intialiseUserData(userData) {
		console.log(userData.clientID)
		localStorage.setItem('isLogged','Y')
		localStorage.setItem('cookie',userData.cookies)
		localStorage.setItem('clientID',userData.clientID)
		localStorage.setItem('email',userData.email)
		localStorage.setItem('name',userData.name)
		
		this.setState({
			isLogged: true
		})
	}

	componentDidMount() {
		if(this.props.logout) alert('logged out');
	}
	
	handleUserLogout(){
		// localStorage.setItem('isLogged','N')
		// this.setState({
		// 	isLogged: false
		// })
		alert('logged out')
	}

	render() {
	return (
	<Router>
		<div>
			{localStorage.getItem('isLogged') === 'Y' ? 
				<div className="App">
					<Router>
						<Route path= "/" exact component= {DashBoard} />
						<Route path= "/orders" component= {DashBoard}/>
						<Route path= "/holdings" component={DashBoard} />
						<Route path= "/positions" component={DashBoard} />
						<Route path= "/funds" component= {DashBoard} />
						<Route path= "/profile" component= {DashBoard} />
						<Route path= "/orderstatus" component= {DashBoard} />
						<Route path= "/logout" component= {DashBoard} logout={this.props.logout}/>
					</Router>
			  	</div> : 
					<LoginForm submitLoginData={this.submitLoginData}/>
			}
		</div>
	</Router>
)} 
}

export default AppRouter