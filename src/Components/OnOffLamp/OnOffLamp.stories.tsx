import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOffLamp} from './OnOffLamp'

export default {
    title: 'OnOffLamp',
    component: OnOffLamp,
}
let callback = () => action('Want to change')

export const LampOn = () => <OnOffLamp on={true} setOn={callback}/>
export const LampOff = () => <OnOffLamp on={false} setOn={callback}/>


export const LampWork = () => {
    const [mode, setMode] = useState<boolean>(false)
    return (
    <OnOffLamp on={mode} setOn={setMode}/>
    )
}