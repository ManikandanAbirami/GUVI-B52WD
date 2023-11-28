import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Dashboard from './Dashboard'
import Post from './Post'
import Products from './Products'

function App() {
  const [count, setCount] = useState(0)
  // let number = 0;
  const [number, setNumber] = useState(0);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path='/post' element={<Post />}></Route>
          <Route exact path='/products' element={<Products />}></Route>
        </Routes>
      </Router>
    </div>

  )
}

export default App
