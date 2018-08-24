export const timeFormat = date => {
    const pretty = [
        addZeroPadding(date.getHours(), 2),
        ':',
        addZeroPadding(date.getMinutes(), 2),
        ':',
        addZeroPadding(date.getSeconds(), 2)
    ].join('')

    return pretty
}

const addZeroPadding = (number, size) => {
    return String('00000' + number).slice(-size)
}
