import * as counterConstant from '../constants/counterConstant'

export const updateValue = value => ({
    type: counterConstant.UPDATE_VALUE,
    payload: value
})

export const updateDefaultCount = value => ({
    type: counterConstant.UPDATE_DEFAULT_COUNT,
    payload: value
})
