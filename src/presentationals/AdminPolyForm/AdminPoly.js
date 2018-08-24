import React from 'react'

const AdminPoly = props => {
    return (
        <div>
            {props.children}
            <div>
                <button onClick={props.onClickGetValue}>Get Value</button>
                <button onClick={props.onClickSetValue}>Set Value</button>
            </div>
        </div>
    )
}

export default AdminPoly
