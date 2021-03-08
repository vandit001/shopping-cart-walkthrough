import React from "react";
import Product from "./product";

export default class Form extends React.Component {
  state = {
    quantity: "",
    name: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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
          <p>
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
          </p>
        </form>
      </div>
    );
  }
}
