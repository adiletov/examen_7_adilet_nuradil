import React, {Component} from 'react';
import './App.css';
import OrderDetails from './Components/OrderDetails/OrderDetails';
import Items from "./Components/Items/Items";

class App extends Component {
  state = {
    items: [
      {name: 'Burger', price: 80, count: 0},
      {name: 'Cheeseburger', price: 90, count: 0},
      {name: 'Fries', price: 45, count: 0},
      {name: 'Frappe', price: 70, count: 0},
      {name: 'Tea', price: 50, count: 0},
      {name: 'Cola', price: 40, count: 0},
    ],
    total: 0,
  };

  addFastFood = (itemIndex) => {
    console.log(itemIndex)
    let items = [...this.state.items];
    let total = this.state.total;
    const productIndex = items.findIndex(index => index.name === itemIndex.name);
    items[productIndex].count++;
    total += itemIndex.price;
    this.setState({items, total});
  };
  removeFastFood = (itemIndex) => {
    console.log(itemIndex);
    let items = [...this.state.items];
    let total = this.state.total;
    const productIndex = items.findIndex(index => index.name === itemIndex.name);
    items[productIndex].count--;
    total -= itemIndex.price;
    this.setState({items, total});
    console.log(this.state.total)
  };

  render() {
    return (
      <div className="App">
        <Items
          addFastFood={this.addFastFood}
        />
        <OrderDetails
            productsApp={this.state.items}
            clickRemove={this.removeFastFood}
            totalPriceApp={this.state.total}
        />
      </div>
    );
  }
}

export default App;
