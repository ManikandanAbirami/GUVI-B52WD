import React from 'react'

function Cart({cartItems, onRemoveFromCart}) {
  return (
    <div>
        <h2>Shopping Cart</h2>
        {cartItems.map(item => (
            <div key={item.id}>
                <h4>{item.name}</h4>
                <button onClick={() => onRemoveFromCart(item)}>Remove from Cart</button>
            </div>
        ))}
    </div>
  )
}

export default Cart