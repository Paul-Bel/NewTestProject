import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type ClockPropsType = { mode: 'Digital' | 'Analog' }
export const getTime = (time: number) => time < 10 ? '0' + time : time

export const Clock = (props: ClockPropsType) => {
    const [times, setTimes] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTimes(new Date())
            console.log('tick')
        }, 1000)
        return () => clearInterval(intervalID)
    }, [])

    let view
    switch (props.mode) {
        case 'Digital':
            return view = <DigitalClockView times={times}/>;
            break;
        case 'Analog':
        default:
            return view = <AnalogClockView times={times}/>
    }

    return <>
        {view}
    </>
}

export type ClockViewPropsType = { times: Date }

