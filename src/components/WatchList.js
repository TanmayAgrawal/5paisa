import React from 'react'
import stock from './Data/watchlist'
import WatchListComp from './WatchListComp'

class WatchList extends React.Component{
	render(){
		return(<div>
            <h1>WatchList</h1>
			{stock.map(item=>(
				<WatchListComp 
					name={item.name}
					change={item.change}
					price={item.price}
				/>))
			}
		</div>)
	}
}

export default WatchList