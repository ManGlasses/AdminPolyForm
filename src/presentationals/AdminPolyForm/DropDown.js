import React from 'react'

const DropDown = props => {
    return (
        <div>
            <label>{props.topic}</label>
            <select value={props.selectValue} onChange={props.onChangeDropDown}>
                <option value="-1">... กรุณาเลือก ...</option>
                {props.dataSource.map(item => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DropDown
