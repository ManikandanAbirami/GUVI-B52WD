import { useState } from "react"
import Account from "./Account";
import { CourseContext } from './CourseContext'
import Footer from "./Footer";

const mern = {
  frontEnd: 'React',
  backEnd: 'NodeJS',
  db: 'MongoDB',
  name: 'MERN FSD Course'
}

const mean = {
  frontEnd: 'Angular',
  backEnd: 'NodeJS',
  db: 'MongoDB',
  name: 'MEAN FSD Course'
}

const footer = {
  footer: "Footer value",
}

function App() {
  const [course, setCourse] = useState(mern);
  const [foot, setFooter] = useState(footer);

  const changeCourse = () => {
    if (course === mern) {
      setCourse(mean);
    } else {
      setCourse(mern);
    }
    setFooter({ footer: "Test footer" })
  }

  return (
    <div>
      <CourseContext.Provider value={course}>
        <Account />
        <Footer />
      </CourseContext.Provider>

      <button onClick={changeCourse}>Switch</button>
    </div>
  )
}

export default App
