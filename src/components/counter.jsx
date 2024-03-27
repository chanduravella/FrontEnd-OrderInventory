import React, { useState } from 'react'

const Counter = () => {
    // define state
    const [count, setCount] = useState(0);

    // increment function
    const increment = () => {
        setCount(count + 1);
    }

    // decrement function
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div >
            <i className="bi bi-file-minus-fill" type="button" onClick={decrement}></i>
            <p style={{ display: "inline", marginLeft: "5px", marginRight: "5px" }}>{count} </p>
            <i className="bi bi-file-plus-fill" type="button" onClick={increment}></i>
        </div >
    )
}

export default Counter;