import React, { Component } from 'react'
import data from './Data/HoldingsData'
import HoldingsTable from './TableGenerator/HoldingsTable'
import axios from 'axios'

class Holdings extends Component {
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
        axios.post('/api/holdings', params).then(res=> {
            this.setState({
                data: res.data
            })
		})
    }

    render() {
        return (
            <table>
                {this.state.data ? <HoldingsTable dataTable={this.state.data}/> : <div></div> }  
                {/* make sure the data being entered as props is an array as in the sample response of the API */}
            </table>
        )
    }
}

export default Holdings
