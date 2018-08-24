import React from 'react'

const CounterList = props => {
    return (
        <div>
            <div>
                <button onClick={props.addList}>Add Counter</button>
            </div>
            <div>
                <input type="number" onChange={e => props.changeInputDefaltCount(e)} />
                <button onClick={props.setDefaltCount}>Save</button>
            </div>
            {props.children}
        </div>
    )
}

export default CounterList
