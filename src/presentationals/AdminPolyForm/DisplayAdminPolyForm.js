import React from 'react'

const DisplayAdminPolyForm = props => {
    return (
        <div>
            <div>
                <span>จังหวัด: {props.dataSource.provName} </span>
                <span> id: {props.dataSource.provId} </span>
            </div>
            <div>
                <span>อำเภอ: {props.dataSource.ampName} </span>
                <span> id: {props.dataSource.ampId} </span>
            </div>
            <div>
                <span>ตำบล: {props.dataSource.tamName} </span>
                <span> id: {props.dataSource.tamId} </span>
            </div>
        </div>
    )
}

export default DisplayAdminPolyForm
