import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Product from './Product';
import Cart from './Cart';

function App() {
  const [products] = useState([
    {id: 1, name: 'Shirts', description: 'Party wear'},
    {id: 2, name: 'Jeans', description: 'Western wear'},
    // {id: 3, name: 'Trousers', description: 'Formal wear'},
    // {id: 4, name: 'T Shirts', description: 'Casual wear'}
  ]);

  const [cart, setCart] =  useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); //cart = [1,2,3] => [...cart, 4] = [1,2,3,4]
  }

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove));
  }

  return (
   <div>
    <h1>Products</h1>
    {products.map(product => (      
      <Product key={product.id} product={product} onAddCart={addToCart} onRemoveCart={removeFromCart} 
      isInCart={cart.includes(product)}/>
    ))}
    <Cart cartItems={cart} onRemoveFromCart={removeFromCart}/>
   </div>
  )
}

export default App
