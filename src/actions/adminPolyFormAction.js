import * as adminPolyFormConstant from '../constants/adminPolyFormConstant'
import * as adminPolyFormApi from '../api/adminPolyFormApi'

export const loadProv = () => {
    return dispatch => {
        adminPolyFormApi.getListProv().then(result => {
            dispatch({
                type: adminPolyFormConstant.LOAD_PROV,
                payload: result.result
            })
        })
    }
}

export const loadAmp = provId => {
    return dispatch => {
        adminPolyFormApi.getAmp(provId).then(result => {
            dispatch({
                type: adminPolyFormConstant.LOAD_AMP,
                payload: result.result
            })
        })
    }
}

export const loadTam = (provId, ampId) => {
    return dispatch => {
        adminPolyFormApi.getTam(provId, ampId).then(result => {
            dispatch({
                type: adminPolyFormConstant.LOAD_TAM,
                payload: result.result
            })
        })
    }
}

// export const loadAmpAndLoadTam = (provId, ampId) => {
//     return dispatch => {
//         adminPolyFormApi.getTam(provId, ampId).then(result => {
//             dispatch({
//                 type: adminPolyFormConstant.LOAD_TAM,
//                 payload: result.result
//             })
//         })
//     }
// }

export const resetAmp = () => ({
    type: adminPolyFormConstant.RESET_AMP
})

export const resetTam = () => ({
    type: adminPolyFormConstant.RESET_TAM
})
