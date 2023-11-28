import React from 'react'
import { useContext } from 'react'
import { CourseContext } from './CourseContext'

function Greeting() {
    const { course, footer } = useContext(CourseContext);
    return (
        <div>
            <h1>Welcome to {footer}</h1>
        </div>
    )
}

export default Greeting