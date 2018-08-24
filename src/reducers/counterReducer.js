import * as counterConstant from '../constants/counterConstant'

const initialState = {
    value: 0,
    defaultCount: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case counterConstant.UPDATE_VALUE:
            return {
                ...state,
                value: state.defaultCount * action.payload + state.value
            }

        case counterConstant.UPDATE_DEFAULT_COUNT:
            return {
                ...state,
                defaultCount: action.payload
            }

        default:
            return state
    }
}
