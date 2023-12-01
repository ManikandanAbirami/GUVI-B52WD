import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'

function Room() {
    const myFavToy = useRef(null);
    const [count, setCount] = useState(45);
    useEffect(() => {
        myFavToy.current = 'Teddy Bear';
        console.log('My Favourite toy is', myFavToy.current);
        // console.log('Total push ups taken today', count);
    });
    useEffect(() => {
        console.log('Total push ups taken yesterday', count);
    }, [count]);

    const clickMe = () => {
        setCount(count + 5);
    }

    return (
        <div>Welcome to my room!
            <button onClick={clickMe}>click</button>
        </div>
    )
}

export default Room