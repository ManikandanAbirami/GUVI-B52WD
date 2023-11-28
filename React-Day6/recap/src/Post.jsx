import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function Post() {
    return (
        <div>
            <Header heading="Welcome to Post page!!" />
            <Link to="/products">
                <button>Products</button>
            </Link>
            <br />
            <Link to="/">
                <button>Dashboard</button>
            </Link>
        </div>
    )
}

export default Post