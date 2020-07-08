import React from 'react'

function HoldingsTable(props) {
    
  let result =  props.dataTable.map((item,index) =>
        <tr key={index}>
            <td>{item.Exch}SE</td>
            <td>{item.FullName}</td>
            <td>{item.Quantity}</td>
            <td>{item.CurrentPrice}</td>
        </tr>
    )
    

    // "BseCode": 539437,
    // "CurrentPrice": 53.2,
    // "DPQty": 0,
    // "Exch":"N",
    // "ExchType":"C",
    // "FullName": "IDFC FIRST BANK LIMITED",
    // "NseCode": 11184,
    // "POASigned": "N",
    // "PoolQty": 1,
    // "Quantity": 1,
    // "ScripMultiplier": 1,
    // "Symbol": "IDFCFIRSTB"
    // }
    
    return (
        
        <tbody>
            <tr>
                <th>Stock Exchange</th>
                <th>FullName</th>
                <th>Quantity</th>
                <th>LTP</th>
            </tr>
            {result}
        </tbody>
    )
}

export default HoldingsTable
