import React, {useState} from 'react'
import './coin.css'
import Modal from './Modal'

function Coin({image, name, symbol, price, change, marketCap, volume, high, low, rank, market24, supply}) {

    const [openPopup, setOpenPopup] = useState(false)

    //Hidden overflowY
        if(openPopup){
            document.body.classList.add('active');
        }else{
            document.body.classList.remove('active')
             }     
    
    return (

        <>
            <div className='coin-list'>
                <div className='coin-row'>
                    <div className='coin'>
                        <div className='image'><img src={image} alt='coin'/></div>
                        <div className='name'><h3>{name}</h3></div>
                       <div className='symbol'><p>{symbol.toUpperCase()}</p></div> 
                    </div>
                    <div className='coin-data'>
                       <p className='price'>{price.toLocaleString("de-DE",{style: "currency", currency: "USD"})}</p>
                       {change > 0 ? (<p className='coin-green'>+{change.toFixed(2)}%</p>) :
                        (<p className='coin-red'>{change.toFixed(2)}%</p>)}
                        
                       <p className ='Market-cap'>{marketCap.toLocaleString("de-DE",{style: "currency", currency: "USD"})}</p>
                        <p className='volume'>{volume.toLocaleString("de-DE",{style: "currency", currency: "USD"})}</p>  
                        <div className='btn-info'>
                            <button onClick={()=>setOpenPopup(true)}>+</button>
                        </div>   
                    </div>                
                </div>
        
            </div>   

                
            {openPopup &&  <Modal   setOpenPopup={setOpenPopup}
                        image={image}
                        name={name} 
                        symbol={symbol}
                        price={price}
                        high={high}
                        low={low}
                        rank={rank}
                        market24={market24}
                        supply={supply}/>
                }
              
            
            </>
    )
}

export default Coin
