import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

function AutoFocusInput() {
    const inputRef = useRef(null);
    const focusInput = () => {
        console.log("To check the inputRef:", inputRef);
        inputRef.current.focus();
        //document.getElementById('ip).focus();
    }
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus</button>
        </div>
    )
}

export default AutoFocusInput