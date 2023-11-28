import React from 'react'
import Cards from './Cards'

function Home({ name, designation, land }) {
    return (
        <div>Home Page
            <h3>{name}</h3>
            <h4>{designation}</h4>
            <Cards land={land} />
        </div>
    )
}

export default Home