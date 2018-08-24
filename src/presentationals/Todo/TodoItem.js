import React from 'react'

const TodoItem = props => {
    return (
        <div
            onClick={props.onClickDiv}
            style={{
                height: '50px',
                width: '100%',
                border: '1px solid black',
                lineHeight: '50px',
                textDecoration: props.styleWhenIsComplete
            }}
        >
            <span>{props.name}</span>
            <div style={{ float: 'right' }}>
                <button onClick={props.onClickEdit}>Edit</button>
                <button onClick={props.onClickDelete}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
