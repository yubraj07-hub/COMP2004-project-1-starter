import React, { useState } from 'react'
import QuantityCounter from './QuantityCounter'

function ProductCard({product,addToCart}) {
    // Handling Quantity State
    const [quantity, setQuantity]= useState(0);
  return (
    <div className='ProductCard'>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.brand}</p>
        <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
        <p>{product.price}</p>
        <button className='addtocart' onClick={()=>addToCart(product,quantity)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard