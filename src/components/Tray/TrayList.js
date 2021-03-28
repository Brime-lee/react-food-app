import React from 'react';
import TrayItem from './TrayItem';

function TrayList({ value }) {
    const { cart } = value
    console.log(value, cart);

    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <TrayItem key={item.id} item={item} value={value} />
            })}
        </div>
    );
}

export default TrayList;