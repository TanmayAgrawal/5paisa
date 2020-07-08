import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Navigation extends Component {

    render() {

        const navStyle = {
            color: 'white'
        };


        return (
            <nav>
                <ul className = 'nav-links'>
                    <Link to='/orders' style = {navStyle}>
                        <li>Orders</li>
                    </Link>
                    <Link to = '/holdings' style = {navStyle}><li>
                        Holdings</li>
                    </Link>
                    <Link to = '/positions' style = {navStyle}>
                        <li>Position</li>
                    </Link>
                    <Link to = '/funds' style = {navStyle}>
                        <li>Margin</li>
                    </Link>
                    <Link to = '/profile' style = {navStyle}>
                        <li>Profile</li>
                    </Link>
                    <Link to ='/orderstatus' style={navStyle}>
                        <li>Order Status</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Navigation
