import React from 'react'

const Todo = props => {
    return (
        <div>
            <input
                type="text"
                placeholder="What need to be done?"
                value={props.tempTextInputAddTodo}
                onChange={props.changeInputAddTodo}
            />
            <button onClick={props.saveAddTodo}>Add Todo</button>
            {props.children}
        </div>
    )
}

export default Todo
