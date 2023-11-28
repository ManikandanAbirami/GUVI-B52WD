import React from 'react'
import { useContext } from 'react'
import { CourseContext } from './CourseContext'

function Course() {
    const course = useContext(CourseContext);
    return (
        <div>
            <h2>Course details:</h2>
            <ol>
                <li>{course.frontEnd}</li>
                <li>{course.backEnd}</li>
                <li>{course.db}</li>
            </ol>
        </div>
    )
}

export default Course