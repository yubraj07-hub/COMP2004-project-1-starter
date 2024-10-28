import React from "react";
import cartempty from "../assets/cart-empty.png";
import cartfull from "../assets/cart-full.png";

function NavBar({ cart }) {
  return (
    <nav className="NavBar ">
      {/* Defining User Name */}
      <p className="NavUser">Hello, Yuvraj</p>
      <div className="NavDiv">
        <div className="NavTitle">
          <h1>Groceries App 🍎</h1>
        </div>
      </div>
      <div className="NavCart">
        {/* Toggle with Cart-Empty and Cart-Full Image */}
        {cart.length > 0 ? (
          <span>
            <img src={cartfull} alt="image-cart-full" />
          </span>
        ) : (
          <span>
            <img src={cartempty} alt="image-cart" />
          </span>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
