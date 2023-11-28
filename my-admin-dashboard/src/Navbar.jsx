import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to="/">Dashboard</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/users">Users</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/settings">Settings</Link>
                        </li>
                    </ul>
                </div>
            </div>


        </nav >
    )
}

export default Navbar