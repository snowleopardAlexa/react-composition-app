import React from 'react';

const ShoppingItem = ({ name, price, country, onRemove }) => (
    <div>
        <span>
            {name} - {price}$ - {country}
        </span>
        <button onClick={() => onRemove(name)}>Remove</button>
    </div>
);

export default ShoppingItem;