import React from 'react'
import './modal.css'

function Modal({image, name, symbol, price, high, low, rank, market24, supply, setOpenPopup}) {
    console.log(rank)
    return (
        <div className='overlay'>
              <div className='more-info'>
                    <div className='prime-data'>
                        <div className='image'><img src={image} alt='coin'/></div>
                        <div className='name'><h3>{name}</h3></div>
                        <div className='symbol'><p>{symbol.toUpperCase()}</p></div> 
                        <button onClick={()=>setOpenPopup(false)}>&#10006;</button>    
                    </div>
                    <div className='data-row'>
                        <div className='current-price'>
                            <p id="title">Price</p>
                            {price.toLocaleString("de-DE",{style: "currency", currency: "USD"})}</div>
                        <div className="high(24h)">
                            <p id="title">High (24h)</p>
                            <p>{high.toLocaleString("de-DE",{style: "currency", currency: "USD"})}</p>
                        </div>
                        <div className="low(24h)">
                            <p id="title">Low (24h)</p>
                            <p>{low.toLocaleString("de-DE",{style: "currency", currency: "USD"})}</p>
                        </div>
                        <div className="market cap rank">
                            <p id="title">MKT Cap Rank</p>
                            {
                                rank === 1 ? <p style={{color:'gold'}}>{rank}</p> : <p>{rank}</p>
                            
                                }
                        </div>
                        <div className="market_cap_change_percentage_24h">
                            <p id="title">MKT (24%)</p>
                            {market24 > 0 ? <p style={{color:'green'}}>+{market24.toFixed(2)}%</p>
                            :<p style={{color:'red'}}>{market24.toFixed(2)}%</p>}
                        </div>
                        <div className="circulating_supply">
                            <p id="title">Circulating Supply</p>
                            <p>{supply.toLocaleString()}</p>
                            <p>({symbol})</p>
                        </div>
                    </div> 
                 </div>   
                
        </div>
    )
}

export default Modal
