import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <div>
            <Header heading="Welcome to Products page!!!!!" />
            <Link to="/">
                <button>Dashboard</button>
            </Link>
        </div>
    )
}

export default Products