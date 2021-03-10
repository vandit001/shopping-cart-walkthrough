import React from "react";

const Item = ({ item }) => (
<div class="basket-product">
<div class="item">
  <div class="product-image">
    <img src="https://placehold.it/10x10" alt="Placholder Image 2" class="product-frame"/>
  </div>
  <div class="product-details">
    <h1><strong>{item.product.name}</strong></h1>
  </div>
</div>
<div class="price">{Math.round(item.product.priceInCents * 0.01 * 100 + Number.EPSILON) / 100}</div>
<div class="quantity">
  <input type="number" value={item.quantity} min="1" class="quantity-field"/>
</div>
<div class="subtotal">{Math.round(item.product.priceInCents * 0.01 * 100 + Number.EPSILON) / 100}</div>
<div class="remove">
  <button>Remove</button>
</div>
</div>

);

export default Item;
