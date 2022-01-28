import React from "react";
import s from "./Clock.module.css";
import {ClockViewPropsType, getTime} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({times}) => {

    return <>
        <div className={s.title}>
            <div>Hours:</div>
            <div>Minutes:</div>
            <div>Second:</div>
        </div>
        <div className={s.time}>
            <div>{getTime(times.getHours())}</div>
            <div>{getTime(times.getMinutes())}</div>
            <div>{getTime(times.getSeconds())}</div>
        </div>
    </>
}