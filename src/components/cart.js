import React from "react";
import Item from "./item";
import './mystyle.module.css';

const Cart = ({ items }) => (
  <div className="container">
    {/* <h1>Cart Items</h1> */}
    <div className="list-group">
      <div className="list-group-item">
        {/* <div className="row">
          <div className="col-md-8">Product</div>
          <div className="col-md-2">Price</div>
          <div className="col-md-2">Quantity</div>
        </div> */}
        {items.map((item)=>(<Item item={item}/>))}
      </div>
    </div>
  </div>
);

export default Cart;
