import React, {useState} from 'react';
import './coin.css'




const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
  return (
    <div className="coin-cointainer">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt=""/>
            <h1>{name}</h1>
             <p className="coin-symbol">{symbol}</p>
          </div>
          <div className='coin-data'>
             <p className="coin-price">&#163;{price}</p>
             <p className="coin-volume">&#163;{volume}</p>
          </div>
          {priceChange < 0 ? (
            <p className='coin-percent red'>
              {priceChange}%
            </p>
          ): <p className='coin-percent green'>
              {priceChange}%
            </p> }
            <p className="coin-marketcap">
               Mkt Cap: &#163;{marketcap}
            </p>

        </div>
    </div>
  )
  }
  



export default Coin;