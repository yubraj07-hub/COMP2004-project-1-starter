import React from 'react'
import QuantityCounter from './QuantityCounter'

function CartCard({item,updateCartItemQuantity}) {
  return (
    // Implement of the cart-details
    <div className='CartCard'>
        <div className='CartCardInfo'>
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <QuantityCounter quantity={item.quantity} setQuantity={(newQuantity)=>updateCartItemQuantity(item.id,newQuantity)} />
        </div>
        <div>
        <p>Subtotal: ${(item.price.slice(1) * item.quantity)}</p>
        <button className='RemoveButton' onClick={()=>updateCartItemQuantity(item.id,0)}>Remove</button>
        </div>
        
        
    </div>
  )
}

export default CartCard