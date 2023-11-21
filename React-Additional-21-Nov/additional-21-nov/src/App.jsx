import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyComp from './MyComp'
import State from './State'

function App() {
//let props = { msg: "Hello", no: 32};
  return (
    // <MyComp msg="Hello" no={32}/>
    // <div>
    //   <MyButton onMouseOut={() => {console.log("Mouseout event!!!")}} onClick={handleClick}>Click Me</MyButton>
    //   <MyButton onClick={handleClick}>Save Me</MyButton>
    // </div>
    <div>
      <State/>
    </div>
  )
}

function handleClick() {
  console.log("clicked!!");
}

// custom components!
function MyButton(props) {
  console.log("spread operator:", {...props});
  return (
    <button {...props} style={{color: 'blue', backgroundColor: 'white'}}>
    </button>
  )
}

export default App
