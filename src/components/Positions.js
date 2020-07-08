import React, { Component } from 'react'
import data from './Data/PositionsData'
import PositionsTable from './TableGenerator/PositionsTable'

class Position extends Component {
    render() {
        return (
            <div>
                <PositionsTable dataTable = {data}/>
            </div>
        )
    }
}

export default Position
