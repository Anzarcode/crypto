import React, {useState, useEffect, useRef}from 'react'
import {GiTwoCoins} from 'react-icons/gi'
import {MdSearch} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import axios from 'axios';
import Coin from './components/Coin';
import Contact from './components/Contact';

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState ('')
  const [contactWindow, handleContact] = useState(false)
  

  useEffect(() =>{
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
            setCoins(res.data) })
      },[])

      const refInput = useRef()

      const handleFocus = ()=>{
        refInput.current.focus() 
      }

      const clearInput =()=>{
        refInput.current.value = ''
        setSearch('')
      }

  return (
    <div className="App">
      <nav>
          <h2>Crypto <GiTwoCoins/> Cost</h2>
          <div className='inputSearch'>
          <input type='text'  onChange={(e) => setSearch(e.target.value)} ref={refInput}/>
          {
            search == '' ? <MdSearch className='mdSearch' onClick={handleFocus} /> : <p className='btn-remove' onClick={clearInput}>&#10006;</p>
          }
         
         </div>
         <MdEmail className='contact' onClick={()=>handleContact(true)}/>
      </nav>    

      <div className='coin-bord'>

      <div className='title'>
          <div className='title-row'>
            <p>Name</p>
            <p>Price</p>
            <p>Var(24h)</p>
            <p>Market Cap</p>
            <p>Volume(24h)</p>
          </div>
      </div>
          {
            coins.filter(coin =>{
              if(search == ''){return coin}
              else if(coin.name.toLowerCase().includes(search.toLowerCase())){return coin}
            })
            .map((coin, key)=>{
              return <Coin key={coin.id}
                      image={coin.image}
                       name={coin.name} 
                       symbol={coin.symbol}
                       price={coin.current_price}
                       change={coin.price_change_percentage_24h}
                       marketCap={coin.market_cap}
                       volume={coin.total_volume}
                       high={coin.high_24h}
                       low={coin.low_24h}
                       rank={coin.market_cap_rank}
                       market24={coin.market_cap_change_percentage_24h}
                       supply={coin.circulating_supply}
                      />
            })
          }
      </div>
      
        {
          contactWindow && <Contact handleContact={handleContact} 
                                    contactWindow={contactWindow}/>
        }

    </div>
  );
}

export default App;
