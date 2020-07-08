import React from 'react'

function FundsTable(props) {

    const result = Object.entries(props.dataTable).map((item,index) => 
    
        <tr key= {index}>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
        </tr> 
       
    )

    return (
        <tbody>
            {result}
        </tbody>
    )
}

export default FundsTable
