import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AutoFocusInput from './AutoFocusInput'
import Room from './Room'
import PushUpCounter from './PushUpCounter'
import Timer from './Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Timer />
      <AutoFocusInput />
    </div>
  )
}

export default App
