import React, {ChangeEvent, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',
};
let callBack = () => action('Want to change')

export const UncontrolledInput = () => <input onChange={callBack}/>;
export const TrackControlledInput = () => {
    const [value, setValue] = useState('')
    return (<>

        <input
            onChange={(e) => setValue(e.currentTarget.value)}/>
        <br/>{value}
    </>)
}
export const GetValueControlledInputButtonPress = () => {
    const [value, setValue] = useState('')
    return (<>
        <input id={'ids'}/>
        <button onClick={() => {
            const doc = document.getElementById('ids') as HTMLInputElement
            setValue(doc.value)
        }}>save</button>
        <br/>actual value: {value}
    </>)

}

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const callBack = (e: string) => setValue(e)
    return (
        <>

        <input
            value={value}
            onChange={(e)=>callBack(e.currentTarget.value)}/>
            <br/> actual input: {value}
        </>
    )
}
export const ControlledCheckBox = () => {
    const [value, setValue] = useState(true)
    const callBack = (e: boolean) => setValue(e)
    return (
        <>

            <input
                type={'checkbox'}
                checked={value}
                onChange={(e)=>callBack(e.currentTarget.checked)}/>
            <br/> actual input: {value.toString()}
        </>
    )
}
export const ControlledSelect = () => {
const [value, setValue] = useState<string | undefined>('2')
    const callBack = (e: ChangeEvent<HTMLSelectElement>) => {setValue(e.currentTarget.value)}
    return <>

        <select value={value} onChange={callBack}>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Voronezh</option>
            <option value={'3'}>Tbilisi</option>

        </select>

    </>

}