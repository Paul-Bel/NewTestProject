import React, {useEffect, useState} from "react";
import s from './UseEffect.module.css'

export default {
    title: 'useEffect'
}

export const SimpleExample = () => {

    const t = new Date().getSeconds()
    const [times, setTimes] = useState(new Date())


    console.log('SimpleExapmle')

    useEffect(() => {
        const intervalID = setInterval(()=>{
            setTimes(new Date())
            console.log('tick')
        },1000)
        return ()=>clearInterval(intervalID)
    },[])




    const getTime = (time: number) => time < 10 ? '0' + time : time


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