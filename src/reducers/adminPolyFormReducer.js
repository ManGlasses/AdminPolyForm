import * as adminPolyFormConstant from '../constants/adminPolyFormConstant'

const initialState = {
    provData: [],
    ampData: [],
    tamData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case adminPolyFormConstant.LOAD_PROV:
            return {
                ...state,
                provData: action.payload
            }

        case adminPolyFormConstant.LOAD_AMP:
            return {
                ...state,
                ampData: action.payload
            }

        case adminPolyFormConstant.LOAD_TAM:
            return {
                ...state,
                tamData: action.payload
            }

        case adminPolyFormConstant.RESET_AMP:
            return {
                ...state,
                ampData: []
            }

        case adminPolyFormConstant.RESET_TAM:
            return {
                ...state,
                tamData: []
            }

        default:
            return state
    }
}
