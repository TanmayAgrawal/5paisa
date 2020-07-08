import React from 'react'


function PositionsTable(props) {

    // SAMPLE DATA

    // "BodQty": 0,
    // "BookedPL": 0,
    // "BuyAvgRate": 0,
    // "BuyQty": 0,
    // "BuyValue": 0,
    // "Exch": "N",
    // "ExchType": "C",
    // "LTP": 52.75,
    // "MTOM": 0.15,
    // "Multiplier": 1,
    // "NetQty": -1,
    // "OrderFor": "D",
    // "PreviousClose": 52.1,
    // "ScripCode": 11184,
    // "ScripName": "IDFCFIRSTB",
    // "SellAvgRate": 52.9,
    // "SellQty": 1,
    // "SellValue": 52.9
    // }
    
    let result =  props.dataTable.map((item,index) =>
    <tr key={index}>
        <td>{item.Exch}SE</td>
        <td>{item.OrderFor=='I'?'Intraday':'Delivery'}</td> 
        <td>{item.ScripName}</td>
        <td>{item.BuyQty}</td>
        <td>{item.BuyAvgRate}</td>
        <td>{item.SellQty}</td>
        <td>{item.SellAvgRate}</td>
        <td>{item.NetQty}</td>  
        <td>{item.LTP}</td>  
        <td>{item.BookedPL}</td>         
        
         
    </tr>
)

return (
    
    <tbody>
        <tr>
            <th>Stock Exchange</th>
            <th>Order Type</th>          
            <th>Symbol</th>
            <th>Buy Qty</th>
            <th>Avg Buy Price</th>
            <th>Sell Qty</th>
            <th>Avg Sell Price</th>
            <th>Net Position</th>
            <th>LTP</th>
            <th>Booked Profit</th>
        </tr>
        {result}
    </tbody>
)
}



export default PositionsTable