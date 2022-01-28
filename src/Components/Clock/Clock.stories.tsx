import React, {useEffect, useState} from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock_useEffect',
    component: Clock,
}

export const BaseAnalogExample = () => {
    return <>
        <Clock mode={'Analog'}/>
    </>
}

export const BaseDigitalExample = () => {
    return <>
        <Clock mode={'Digital'}/>
    </>
}


