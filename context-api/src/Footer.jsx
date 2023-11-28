import React from 'react'
import { useContext } from 'react'
import { CourseContext } from './CourseContext'

function Footer() {
    const course = useContext(CourseContext);
    return (
        <div>{course.name}</div>
    )
}

export default Footer