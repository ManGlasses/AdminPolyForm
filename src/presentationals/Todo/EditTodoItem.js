import React from 'react'

const EditTodoItem = props => {
    return (
        <div style={{ height: '50px', width: '100%', border: '1px solid black', lineHeight: '50px' }}>
            <input
                style={{ width: '90%' }}
                defaultValue={props.name}
                onChange={props.onChangeInputEdit}
                onKeyPress={props.onKeyPressInputEdit}
            />
        </div>
    )
}

export default EditTodoItem
