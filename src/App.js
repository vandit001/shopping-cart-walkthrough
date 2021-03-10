import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Cart from "./components/cart";
import Form from "./components/form";
import { Component } from "react";
//import Layout from "./components/Layout";


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

  componentDidMount() {
    this.sumTotal();
  }
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

    this.sumTotal();
  };

  sumTotal = () => {
    debugger
    const lineTotal = this.state.cartItems.map(
      (item) => item.product.priceInCents * item.quantity
    );
    const add = (a, b) => a + b;
    this.setState({
      sum: lineTotal.reduce(add),
     // clicked: !this.state.clicked,
    });
  };

  render() {
    let year = "2021";

    let toggle = "Get Total";

    let sum = "";
    sum = Math.round(this.state.sum * 0.01 * 100 + Number.EPSILON) / 100;
    // sum = this.state.clicked
    //   ? ((toggle = "Reset"),
    //     (sum = ` ${
    //       Math.round(this.state.sum * 0.01 * 100 + Number.EPSILON) / 100
    //     }`))
    //   : "";

    const mystyle = {
      // color: "white",
      // // backgroundColor: "DodgerBlue",
      // padding: "10px",
      // fontFamily: "Arial"
    };
    return (
      <main>
        <div class="basket">
          <Form products={this.state.products} addToCart={this.addToCart} />
          {/* <div class="basket-module">
        <label for="promo-code">Enter a promotional code</label>
        <input id="promo-code" type="text" name="promo-code" maxlength="5" class="promo-code-field"/>
        <button class="promo-code-cta">Apply</button>
      </div> */}
          <div class="basket-labels">
            <ul>
              <li class="item item-heading">Item</li>
              <li class="price">Price</li>
              <li class="quantity">Quantity</li>
              {/* <li class="subtotal">Subtotal</li> */}
            </ul>
          </div>
          <Cart items={this.state.cartItems} />

        </div>
        <aside>
          <div class="summary">
            <div class="summary-total-items"><span class="total-items"></span> Items in your Bag</div>
            <div class="summary-subtotal">
              <div class="subtotal-title">Subtotal</div>
              <div class="subtotal-value final-value" id="basket-subtotal">{sum}</div>
              <div class="summary-promo hide">
                <div class="promo-title">Promotion</div>
                <div class="promo-value final-value" id="basket-promo"></div>
              </div>
            </div>
            {/* <div class="summary-delivery">
          <select name="delivery-collection" class="summary-delivery-selection">
              <option value="0" selected="selected">Select Collection or Delivery</option>
             <option value="collection">Collection</option>
             <option value="first-class">Royal Mail 1st Class</option>
             <option value="second-class">Royal Mail 2nd Class</option>
             <option value="signed-for">Royal Mail Special Delivery</option>
          </select>
        </div> */}
            <div class="summary-total">
              <div class="total-title">Total</div>
              <div class="total-value final-value" id="basket-total">{sum}</div>
            </div>
            <div class="summary-checkout">
              <button class="checkout-cta">Go to Secure Checkout</button>
            </div>
          </div>
        </aside>
      </main>
    );
    // return (
    //   <div style={mystyle} className="App">
    //     <Header />
    //     <br></br>
    //     <Cart items={this.state.cartItems} />
    //     <br></br>
    //     <div className="container">
    //       <button onClick={this.sumTotal}>{toggle}</button>
    //       {sum}
    //     </div>
    //     <br></br>
    //     <Form products={this.state.products} addToCart={this.addToCart} />
    //     <Footer copyright={year} />
    //   </div>
    // );
    // return (
    //   <div className="App">
    //     <Layout>
    //       <br></br>
    //       <Cart items={this.state.cartItems} />
    //       <br></br>
    //       <div className="container">
    //         <button onClick={this.sumTotal}>{toggle}</button>
    //         {sum}
    //       </div>
    //       <br></br>
    //       <Form products={this.state.products} addToCart={this.addToCart} />
    //     </Layout>

    //   </div>
    // );
  }
}

export default App;
