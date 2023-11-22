import React, { useState, useEffect } from 'react'

// Mount (initial render) -> updates (re-render) -> unmount

function Counter() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);
  
  useEffect(() => {
    console.log("Every Mount and Updates!!!");
  });

  useEffect(() => {
    console.log("Every Mount because it has empty dependancy array!!!");
  }, []);

  useEffect(() => {
    console.log("Every Mount and bool dependancy array!!!");

    return () => console.log('Unmount!!!!!!');
  }, [bool]);

  return (
    <div style={{padding: "10px", margin: "5px"}}>
        <button onClick={() => setBool(!bool)}>Re-Render</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count: {count}</p>
    </div>
  )
}

export default Counter