import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import data from './Data/OrderStatusData'
import OrderStatusTable from './TableGenerator/OrderStatusTable'

class OrderStatus extends Component {
    render() {
        return (
            <div>
                <OrderStatusTable dataTable = {data}/>
            </div>
        )
    }
}

export default OrderStatus
