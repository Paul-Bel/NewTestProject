import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOffLamp} from './OnOffLamp'

export default {
    title: 'OnOffLamp',
    component: OnOffLamp,
}

export const LampOn = () => <OnOffLamp on={true} setOn={x=>x}/>
export const LampOff = () => <OnOffLamp on={false} setOn={x=>x}/>


export const LampWork = () => {
    const [mode, setMode] = useState<boolean>(false)
    return (
    <OnOffLamp on={mode} setOn={setMode}/>
    )
}