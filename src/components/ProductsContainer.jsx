import React from 'react'
import ProductCard from './ProductCard'

function ProductsContainer({products, addToCart}) {
  return (
    <div className='ProductsContainer'>
        {products.map(product=>(
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
    </div>
  );
}

export default ProductsContainer