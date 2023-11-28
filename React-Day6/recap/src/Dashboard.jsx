import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <Header heading="Welcome to Dashboard page!!" />
            <Link to="/post">
                <button>Post</button>
            </Link>
        </div>
    )
}

export default Dashboard