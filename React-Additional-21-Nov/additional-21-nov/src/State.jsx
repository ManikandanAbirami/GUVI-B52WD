import React, { useState } from 'react'

function State() {
    //let count = 0;
    const [count, setCount] = useState(0);
    // const [name, setName] = useState("Mani");
    console.log(`Rendering ${count} time.`);
  return (
    <div>
        <button onClick={() => {
            //count++;
            // setName("Mani");
            setCount(count + 1);
            // setName("kandan Anbalagan" + " " + count);
            console.log("count result:", count);
        }}>Increment</button>
        <p>Count: {count}</p>
        <p>Name: {name}</p>
    </div>
  )
}

export default State