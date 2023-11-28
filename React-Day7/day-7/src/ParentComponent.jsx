import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const [childData, setChildData] = useState('');
    // let childData = '';
    const handleReceiveData = (data) => {
        setChildData(data);
        // childData = data;
        // console.log(childData);
    }
    return (
        <div>
            <h1>Data from Child Component: {childData}</h1>
            <ChildComponent receiveData={handleReceiveData} />
        </div>
    )
}

export default ParentComponent