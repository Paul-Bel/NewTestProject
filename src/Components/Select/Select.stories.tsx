import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'Select',
};

type ItemsType = {
    title: string
    value: string
}
type SelectPropsType = {
    value?: any
    onChange: (value: string) => void
    items: ItemsType[]
}
const item = [
    {title: "Minsk", value: '1'},
    {title: "Dushanbe", value: '2'},
    {title: "Tbilisi", value: '3'},
    {title: "Istanbul", value: '4'},]

export const WithValue = () => {
    const [value, setValue] = useState('2')
    const onChange = (e: string) => {
        action(e)
        setValue(e)
    }
    return <>
        <Select
            value={value}
            onChange={onChange}
            items={item}
        />

    </>
}
export const WithoutValue = () => {
    const [value, setValue] = useState('')
    const onChange = (e: string) => {
        action(e)
        setValue(e)
    }
    return <>
        <Select
            value={value}
            onChange={onChange}
            items={item}
        />

    </>
}


// <Star selected={props.value > 0} setValue={props.onChange} value={1}/>
// <Star selected={props.value > 1} setValue={props.onChange} value={2}/>
// <Star selected={props.value > 2} setValue={props.onChange} value={3}/>
// <Star selected={props.value > 3} setValue={props.onChange} value={4}/>
// <Star selected={props.value > 4} setValue={props.onChange} value={5}/>