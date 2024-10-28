import React from 'react'

function QuantityCounter({quantity,setQuantity}) {
  return (
    <div className='ProductQuantityDiv'>
        {/* Updating Quantity State */}
        <button className='QuantityBtn' onClick={()=>setQuantity(quantity>0?quantity-1:0)}>-</button>
        <span>{quantity}</span>
        <button className='QuantityBtn' onClick={()=>setQuantity(quantity+1)}>+</button>
    </div>
  )
}

export default QuantityCounter