import React from "react";

const Item = ({ item }) => (
  <div className="list-group-item">
    <div className="row">
      <div className="col-md-8">{item.product.name}</div>
      <div className="col-md-2">
        ${" "}
        {Math.round(item.product.priceInCents * 0.01 * 100 + Number.EPSILON) /
          100}{" "}
      </div>
      <div className="col-md-2">{item.quantity}</div>
    </div>
  </div>
);

export default Item;
