import React, { useState } from "react";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

function GroceriesAppContainer({ products }) {
    // Cart state handling
  const [cart, setcart] = useState([]);
  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      alert("please add a quantity before adding to cart.");
      return;
    }
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setcart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setcart([...cart, { ...product, quantity }]);
    }
  };
  const updateCartItemQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setcart(cart.filter((item) => item.id !== productId));
    } else {
      setcart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };
  const emptyCart = () => setcart([]);
  return (
    <>
    {/* Navbar Portion */}
      <NavBar cart={cart} />
      <div className="GroceriesApp-Container">
        {/* Import of ProductsContainer and CartContainer */}
        <ProductsContainer products={products} addToCart={addToCart} />
        <CartContainer
          cart={cart}
          updateCartItemQuantity={updateCartItemQuantity}
          emptyCart={emptyCart}
        />
      </div>
    </>
  );
}

export default GroceriesAppContainer;
