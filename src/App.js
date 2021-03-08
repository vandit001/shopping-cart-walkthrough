import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Cart from "./components/cart";
import Form from "./components/form";
import { Component } from "react";

class App extends Component {
  state = {
    products: [
      { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
      { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499 },
      { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999 },
      { id: 43, name: "Small Aluminum Keyboard", priceInCents: 2500 },
      { id: 44, name: "Practical Copper Plate", priceInCents: 1000 },
      { id: 45, name: "Awesome Bronze Pants", priceInCents: 399 },
      { id: 46, name: "Intelligent Leather Clock", priceInCents: 2999 },
      { id: 47, name: "Ergonomic Bronze Lamp", priceInCents: 40000 },
      { id: 48, name: "Awesome Leather Shoes", priceInCents: 3990 },
    ],
    cartItems: [
      {
        id: 1,
        product: { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
        quantity: 1,
      },
      {
        id: 2,
        product: {
          id: 41,
          name: "Heavy Duty Concrete Plate",
          priceInCents: 499,
        },
        quantity: 2,
      },
      {
        id: 3,
        product: {
          id: 42,
          name: "Intelligent Paper Knife",
          priceInCents: 1999,
        },
        quantity: 1,
      },
    ],
    clicked: false,
  };

  //add products to cart

  addToCart = (input) => {
    let nItem = this.state.products.filter(
      (product) => product.name === input.name
    );
    let nCart = this.state.cartItems.concat({
      id: this.state.cartItems[this.state.cartItems.length - 1].id + 1,
      product: nItem[0],
      quantity: input.quantity,
    });
    this.setState({
      cartItems: nCart,
    });
  };

  sumTotal = () => {
    const lineTotal = this.state.cartItems.map(
      (item) => item.product.priceInCents * item.quantity
    );
    const add = (a, b) => a + b;
    this.setState({
      sum: lineTotal.reduce(add),
      clicked: !this.state.clicked,
    });
  };

  render() {
    let year = "2021";

    let toggle = "Get Total";

    let sum = "";

    sum = this.state.clicked
      ? ((toggle = "Reset"),
        (sum = `  $ ${
          Math.round(this.state.sum * 0.01 * 100 + Number.EPSILON) / 100
        }`))
      : "";

    return (
      <div className="App">
        <Header />
        <br></br>
        <Cart items={this.state.cartItems} />
        <br></br>
        <div className="container">
          <button onClick={this.sumTotal}>{toggle}</button>
          {sum}
        </div>
        <br></br>
        <Form products={this.state.products} addToCart={this.addToCart} />
        <Footer copyright={year} />
      </div>
    );
  }
}

export default App;
