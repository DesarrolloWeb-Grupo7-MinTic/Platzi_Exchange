import React from 'react'
import './style.css';

export function formatNumber(value) {
    var units = ["k", "m", "mM", "b", "P", "E", "Z", "Y"],
      decimal;
  
    for (var i = units.length - 1; i >= 0; i--) {
      decimal = Math.pow(1000, i + 1);
  
      if (value <= -decimal || value >= decimal) {
        return +(value / decimal).toFixed(2) + units[i];
      }
    }
  
    return value;
  }

function TableDataRow({image, i, id,current_price,market_cap, price_change_percentage_24h }) {
    return (
        <>
            <img className='logo_moneda'   src={image} alt='coin'></img>
            <p className='p_tableRow' ># {i}</p>
            <p className='p_tableRow'>{id}</p>
            <p className='p_tableRow'>$ { current_price } USD</p>
            <p className='p_tableRow'>$ { formatNumber(market_cap)}</p>
            <p className={ price_change_percentage_24h > 0 ? 'p_tableRow green' : 'p_tableRow red' }>{price_change_percentage_24h}%</p>
            <button className='button'>Detalle</button>  
        </>
    )
}

export default TableDataRow
