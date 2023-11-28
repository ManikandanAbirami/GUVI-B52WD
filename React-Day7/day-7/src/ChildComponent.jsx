import React from 'react'

function ChildComponent({ receiveData }) {
    const sendDataToParent = () => {
        receiveData("Hello from Child Component")
    };

    return (
        <div>
            <button onClick={sendDataToParent}>Send Data to Parent</button>
        </div>
    )
}

export default ChildComponent