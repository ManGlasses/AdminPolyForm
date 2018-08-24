import uniqid from 'uniqid'
import * as todoConstant from '../constants/todoConstant'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case todoConstant.ADD_TODO:
            return [
                ...state,
                {
                    id: uniqid('TodoList-'),
                    name: action.name,
                    isComplete: false
                }
            ]

        case todoConstant.DELETE_TODO:
            return state.filter(item => {
                return item.id !== action.id
            })

        case todoConstant.UPDATE_TODO:
            return state.map(item => {
                if (item.id === action.id) {
                    item.name = action.name
                }
                return item
            })

        case todoConstant.UPDATE_STATUS:
            return state.map(item => {
                if (item.id === action.id) {
                    item.isComplete = !item.isComplete
                }
                return item
            })

        case todoConstant.CLEAR_COMPLETED:
            return state.filter(item => !item.isComplete)

        default:
            return state
    }
}
