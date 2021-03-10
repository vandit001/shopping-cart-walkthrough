import React from "react";
import Product from "./product";
const btnstyle={
  float: "right"
}
export default class Form extends React.Component {
  state = {
    quantity: "",
    name: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addToCart(this.state);
  };

  inputChange = (e) => {
    let rounded = Math.round(e.target.value);
    this.setState({
      quantity: rounded,
    });
  };

  selectChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (    
      <div className="container">
        <form onSubmit={this.onSubmit}>
        <div class="basket-module">
          <label for="promo-code">Add Product In Cart</label>
          {/* <input id="promo-code" type="text" name="promo-code" maxlength="5" class="promo-code-field"/> */}
          <button class="promo-code-cta" style={btnstyle}>Add</button>
          <input
                style={{float: "right",height:"25px"}}
                type="number"
                placeholder="quantity"
                value={this.state.quantity}
                onChange={this.inputChange}
                name="quantity"
                class="quantity-field"
              />
          <select
                className="promo-code-field"
                id="promo-code"
                value={this.state.name}
                onChange={this.selectChange}
              >
                <option>Select an option...</option>
                {this.props.products.map((product, i) => (
                  <Product key={i} product={product} />
                ))}
              </select>
             
        </div>
          {/* <p>
            <label>
              Quantity:{" "}
              <input
                type="number"
                value={this.state.quantity}
                onChange={this.inputChange}
                name="quantity"
              />
            </label>
          </p>
          <label>
            Product:
            <div className="input-group mb-3">
              <select
                className="custom-select"
                id="inputGroupSelect01"
                value={this.state.name}
                onChange={this.selectChange}
              >
                <option>Select an option...</option>
                {this.props.products.map((product, i) => (
                  <Product key={i} product={product} />
                ))}
              </select>
            </div>
          </label>
          <p>
            <input type="submit" value="Submit" />
          </p> */}
        </form>
      </div>
    );
  }
}
