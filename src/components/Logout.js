import React from 'react';
import AppRouter from '../routers/AppRouter';

class Logout extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        localStorage.clear();
    }

    render() {
        return (
            <div>
                Logged Out!   
            </div>
        )
    }
}

export default Logout