import React from 'react'

function OrderStatusTable(props) {

// Sample data

    // "Exch": "N",
    // "ExchOrderID": 1000000000140570,
    // "ExchOrderTime": "/Date(1552999348000+0530)/",
    // "ExchType": "C",
    // "OrderQty": 100,
    // "OrderRate": 174.6,
    // "PendingQty": 0,
    // "ScripCode": 2475,
    // "Status": "Modified",
    // "Symbol": "ONGC",
    // "TradedQty": 100,
    
    let result =  props.dataTable.map((item,index) =>
        <tr key={index}>
            <td>{item.Exch}SE</td>
            <td>{item.Symbol}</td>
            <td>{item.OrderRate}</td>
            <td>{item.OrderQty}</td>
            <td>{item.TradedQty}</td>
            <td>{item.ExchOrderID}</td> 
        </tr>
    )
    
    
    return (
        
        <tbody>
            <tr>
                <th>Stock Exchange</th>
                <th>Symbol</th>
                <th>Order Price</th>
                <th>Order Quantity</th>
                <th>Traded Quantity</th>
                <th>Exchange Order</th>
                <th></th>
            </tr>
            {result}
        </tbody>
    )
}

export default OrderStatusTable
