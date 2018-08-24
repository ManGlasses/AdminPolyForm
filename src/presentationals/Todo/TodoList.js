import React from 'react'

const pointer = {
    cursor: 'pointer'
}

const TodoList = props => {
    return (
        <div style={{ width: '30%' }}>
            {props.children}
            <u style={pointer} onClick={props.onClickAll}>
                All
            </u>
            &ensp;&ensp;
            <u style={pointer} onClick={props.onClickCompleted}>
                Completed
            </u>
            &ensp;&ensp;
            <u style={pointer} onClick={props.onClickActive}>
                Active
            </u>
            &emsp;&emsp;&emsp;
            <u style={pointer} onClick={props.onClickClearCompleted}>
                Clear Completed
            </u>
        </div>
    )
}

export default TodoList
