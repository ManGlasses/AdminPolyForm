import * as todoConstant from '../constants/todoConstant'

export const addTodo = name => ({
    type: todoConstant.ADD_TODO,
    name
})

export const deleteTodo = id => ({
    type: todoConstant.DELETE_TODO,
    id
})

export const updateTodo = (id, name) => ({
    type: todoConstant.UPDATE_TODO,
    id,
    name
})

export const updateStatus = id => ({
    type: todoConstant.UPDATE_STATUS,
    id
})

export const clearCompleted = () => ({
    type: todoConstant.CLEAR_COMPLETED
})
