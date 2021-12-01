import React, {useState} from "react";

export type RatingPropsType = 0 | 1 | 2 | 3 | 4 | 5;

type RaitingType = {
    value: RatingPropsType
    setValue: (value: RatingPropsType)=>void
}

export function Rating(props: RaitingType) {
    return (
        <div>
            <Star selected={props.value > 0} setValue={()=>{props.setValue(1)}}/>
            <Star selected={props.value > 1} setValue={()=>{props.setValue(2)}}/>
            <Star selected={props.value > 2} setValue={()=>{props.setValue(3)}}/>
            <Star selected={props.value > 3} setValue={()=>{props.setValue(4)}}/>
            <Star selected={props.value > 4} setValue={()=>{props.setValue(5)}}/>

        </div>);
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
    value?: RatingPropsType
}

export function Star(props: StarPropsType)  {
    return <span onClick={props.setValue}>
         {props.selected ? <b> star </b> : " star "}
    </span>
}