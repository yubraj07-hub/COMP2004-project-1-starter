import React from "react";
import CartCard from "./CartCard";

function CartContainer({ cart, updateCartItemQuantity, emptyCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price.slice(1) * item.quantity,
    0
  );

  return (
    <div className="CartContainer">
      <h2>Cart items: {cart.length}</h2>
      {/* Toggle between empty items card or items card */}
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
            {/* Mapping of CartCard */}
          {cart.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              updateCartItemQuantity={updateCartItemQuantity}
            />
          ))}

          <div className="cartbtndiv">
            {/* Functionality for an empty card.*/}
            <button className="RemoveButton" onClick={emptyCart}>
              Empty Cart
            </button>
            <button id="BuyButton">
              <span>Checkout:</span>
              <br></br>${total.toFixed(2)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
