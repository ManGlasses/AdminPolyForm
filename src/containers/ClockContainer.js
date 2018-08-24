import React, { Component } from 'react'
import { timeFormat } from '../theme/js/DateTimeUtils'
import Clock from '../presentationals/Clock'

export class ClockContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTime: timeFormat(new Date())
        }
        this.timer = setInterval(this.setTimer, 1000)
    }

    componentWillUnmount = () => {
        clearInterval(this.timer)
    }

    setTimer = () => {
        const { dueAlarmTime } = this.props
        const currentTime = timeFormat(new Date())
        this.setState({
            currentTime: currentTime
        })
        dueAlarmTime && dueAlarmTime(currentTime)
    }

    render() {
        const wrapToProps = {
            currentTime: this.state.currentTime
        }
        return <div>{Clock(wrapToProps)}</div>
    }
}

export default ClockContainer
