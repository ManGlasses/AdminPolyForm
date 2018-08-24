import React from 'react'

const CounterRemove = props => {
    return (
        <div>
            <button onClick={() => props.deleteList(props.id)}>Remove</button>
            {props.children}
        </div>
    )
}

export default CounterRemove
