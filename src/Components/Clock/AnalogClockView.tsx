import React from "react";
import {ClockViewPropsType} from "./Clock";
import s from './AnalogClock.module.css'

export const AnalogClockView: React.FC<ClockViewPropsType> = ({times}) => {
    const secondsStyle = {
        transform: `rotate(${times.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${times.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${times.getHours() * 30}deg)`
    };
    return <>
        <div className={s.clock}>
            <div className={s["analog-clock"]}>
                <div className={`${s.dial} ${s.seconds}`} style={secondsStyle} />
                <div className={`${s.dial} ${s.minutes}`} style={minutesStyle} />
                <div className={`${s.dial} ${s.hours}`} style={hoursStyle} />
            </div>
            <div className={"digital-clock"}>
                {times.getSeconds()}:{times.getMinutes()}:{times.getHours()}
            </div>
        </div>
    </>
}