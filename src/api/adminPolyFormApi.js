import * as adminPolyFormConstant from '../constants/adminPolyFormConstant'

export const getListProv = () => {
    return fetch(adminPolyFormConstant.BASE_URL_ADMIN_POLY + 'list').then(
        response => response.json()
    )
}

export const getAmp = provId => {
    return fetch(
        adminPolyFormConstant.BASE_URL_ADMIN_POLY + 'list?provcode=' + provId
    ).then(response => response.json())
}

export const getTam = (provId, ampId) => {
    return fetch(
        adminPolyFormConstant.BASE_URL_ADMIN_POLY +
            'list?provcode=' +
            provId +
            '&ampcode=' +
            ampId
    ).then(response => response.json())
}
