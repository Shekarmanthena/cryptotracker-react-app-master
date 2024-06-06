import React from 'react';
import { useEffect, useState, } from 'react';
import './App.css';
import axios from 'axios';
import Coins from './Coins';

// const cors = require("cors");

// app.use(cors({
//   origin: "*",
// }))


function App() {
  
  const [coins,setCoins] = useState([])
  const[search,setSearch] = useState('')
  
  
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=25&page=1&sparkline=false&locale=en')
      .then(
        res=>{
          setCoins(res.data);
          
        }
        
      )
      .catch(err => console.log(err))
  },[])
  

  const fcoins = coins.filter((item)=>{
    return(search.toLowerCase() ==='' ? item :item.name.toLowerCase().includes(search.toLocaleLowerCase()))
  })


  return (
    <div >

      <div className="nav">
      <div className="head">
        <h1>CRYPTO TRACKER</h1>
        <h3>By Rajashekar</h3>
      </div>
      <div className='inputform'>
        <form >
          <div>
            <input  onChange={(e)=>setSearch(e.target.value)} placeholder='Search' type="text" />
          </div>
        </form>
      </div>
      </div>

      <div>
        {fcoins.map((coin)=>{
          return <Coins
          key={coin.id}
          name={coin.name}
          image={coin.image}
          current={coin.current_price}
          high={coin.high_24h}
          low={coin.low_24h}
          change={coin.price_change_percentage_24h}
          />
        })}
      </div>
    </div>
    
  );
}

export default App;
