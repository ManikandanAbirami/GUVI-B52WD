import React from 'react'

function Product(props) {
  return (
    <div>
        <h3>{props.product.name}</h3>
        <p>{props.product.description}</p>
        {props.isInCart ? (
        <button onClick={() => props.onRemoveCart(props.product)}>Remove from Cart</button> ) : (
            <button onClick={() => props.onAddCart(props.product)}>Add to Cart</button>
        )
        }
    </div>
  )
}

export default Product