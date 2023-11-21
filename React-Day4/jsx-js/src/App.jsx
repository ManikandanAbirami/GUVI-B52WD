import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='main'>
      <h1>MERN - STACK</h1>
      <p>MongoDB</p>
      <p>Express JS</p>
      <p>React JS</p>
      <p>Node JS</p>
    </div>

    // React.createElement("div", {id: "main"},
    //   React.createElement("h1", null, "MERN - STACK"),
    //   React.createElement("p", null, "MongoDB"),
    //   React.createElement("p", null, "Express JS"),
    //   React.createElement("p", null, "React JS"),
    //   React.createElement("p", null, "Node JS")
    // )
  )
}

export default App
