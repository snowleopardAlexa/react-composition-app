import React from 'react';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  state = {
    items: [
      {
        name: 'Apple',
        price: 10,
        country: 'Poland'
      },
      {
        name: 'Oranges',
        price: 5,
        country: 'Mexico'
      },
      {
        name: 'Bananas',
        price: 2,
        country: 'Ecuador'
      },
      {
        name: 'Pineapple',
        price: 3,
        country: 'Italy'
      },
    ],
  };

  onRemove = (itemName) => {
    this.setState(({ items }) => ({
      items: items.filter(({ name }) => itemName !== name),
    }));
  };

  render() {
    return (
      <ShoppingCart shoppingItems={this.state.items} onRemove={this.onRemove} />
    );
  }
}

export default App;
