import React from 'react'
import orderbook from './Data/OrderBook'
import TransHistComp from './TransHistComp'
import TransHistHead from './TransHistHead'

class TransHist extends React.Component{
	render(){
		return(
		<div>
			{orderbook.heading.map(item =>(
				<TransHistHead
					Date={item.Date}
					BuySell={item.BuySell}
                    Instrument={item.Instrument}
                    Exch={item.Exch}
                    Type={item.Type}
                    Qty={item.Qty}
                    Rate={item.Rate}
				/>
			))
			}

			{orderbook.content.map(item=>(
				<TransHistComp 
					Date={item.Date}
					BuySell={item.BuySell}
                    Instrument={item.Instrument}
                    Exch={item.Exch}
                    Type={item.Type}
                    Qty={item.Qty}
                    Rate={item.Rate}
				/>))
			}
		</div>
		)}
}

export default TransHist