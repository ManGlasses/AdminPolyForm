import React from 'react'

const SetAdminPoly = props => {
    return (
        <div>
            <div>
                <label>จังหวัด</label>
                <input type="text" onChange={props.onChangeInputProv} />
            </div>
            <div>
                <label>อำเภอ</label>
                <input type="text" onChange={props.onChangeInputAmp} />
            </div>
            <div>
                <label>ตำบล</label>
                <input type="text" onChange={props.onChangeInputTam} />
            </div>
            <div>
                <button onClick={props.onClickSave}>ตกลง</button>
                <button onClick={props.onClickCancel}>ยกเลิก</button>
            </div>
        </div>
    )
}

export default SetAdminPoly
