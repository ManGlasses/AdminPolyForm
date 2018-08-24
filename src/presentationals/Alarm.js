import React from 'react'
import '../theme/css/clock.css'

const Alarm = props => {
    return (
        <div>
            {props.children}
            <div>
                <input type="text" onChange={e => props.changeInputAlarm(e)} />
                <button onClick={props.setAlarm}>Save</button>
            </div>
            <div>
                <img className={`clock ${props.shakeImg}`} src="./resource/alarmClock.jpg" alt="clock" />
            </div>
        </div>
    )
}

export default Alarm
