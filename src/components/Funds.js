import React, { Component } from 'react'
import FundsTable from './TableGenerator/FundsTable'
import data from './Data/FundsData'
import axios from 'axios'

class Funds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }

    componentWillMount() {
        const params = {
            cookie: localStorage.getItem("cookie"),
            clientID: localStorage.getItem("clientID")
		}
        axios.post('/api/margin', params).then(res=> {
            this.setState({
                data: res.data
            })
		})
    }

    render() {
        return (
            <table >
                {this.state.data[0] ? <FundsTable dataTable = {this.state.data[0]}/> : <div></div>}        
            </table>
        )
    }
}

export default Funds
