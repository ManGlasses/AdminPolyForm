import React from 'react'

const Counter = props => {
    return (
        <div>
            <button onClick={() => props.calculate(1)}>+</button>
            <b>{props.valueNumber}</b>
            <button onClick={() => props.calculate(-1)}>-</button>
        </div>
    )
}

export default Counter
