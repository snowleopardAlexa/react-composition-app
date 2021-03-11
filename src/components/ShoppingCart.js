import React from 'react';
import ShoppingItem from './ShoppingItem';

// We take shoppingItems, onRemove as props from App.js and we 
// pass them down via the component.
const ShoppingCart = ({ shoppingItems, onRemove }) => (
    <div>
        My Shopping List
        <ol>
        {/* We are mapping over the items from App.js */}
            {shoppingItems.map(({ name, price, country }) => (
                <li key={name}>
                    {/* We are displaying the objects from state on the screen in different component */}
                    <ShoppingItem name={name} price={price} country={country} onRemove={onRemove} />
                </li>
            ))}
        </ol>
    </div>
);

export default ShoppingCart;