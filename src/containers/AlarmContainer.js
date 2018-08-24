import React, { Component } from 'react'
import ClockContainer from './ClockContainer'
import Alarm from '../presentationals/Alarm'

export class AlarmContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tempTimetoAlarm: 0,
            timetoAlarm: 0,
            shakeImg: null
        }
    }

    dueAlarmTime = value => {
        if (value === this.state.timetoAlarm) {
            this.setState({
                shakeImg: 'shakeImg'
            })
        }
    }

    changeInputAlarm = e => {
        this.setState({
            tempTimetoAlarm: e.target.value
        })
    }

    setAlarm = () => {
        this.setState({
            timetoAlarm: this.state.tempTimetoAlarm
        })
    }

    render() {
        const wrapToProps = {
            changeInputAlarm: this.changeInputAlarm,
            setAlarm: this.setAlarm,
            dueAlarmTime: this.dueAlarmTime,
            shakeImg: this.state.shakeImg,
            children: <ClockContainer dueAlarmTime={this.dueAlarmTime} />
        }
        return <div>{Alarm(wrapToProps)}</div>
    }
}

export default AlarmContainer
