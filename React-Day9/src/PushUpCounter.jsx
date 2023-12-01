import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

function PushUpCounter() {
    const pushUpCount = useRef(0);
    const [displayCount, setDisplayCount] = useState(0);

    const pushUp = () => {
        pushUpCount.current += 1;
        console.log(`I have taken pushup ${pushUpCount.current} times!`);
    }

    const showPushUp = () => {
        setDisplayCount(pushUpCount.current);
    }
    return (
        <div>
            <button onClick={pushUp}>PushUp!</button>
            <button onClick={showPushUp}>How many pushups?</button>
            <p>I have taken {displayCount} pushup(s).</p>
        </div>
    )
}

export default PushUpCounter