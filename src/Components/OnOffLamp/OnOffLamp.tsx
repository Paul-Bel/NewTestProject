import React, {useState} from "react";

type LampProps = {
    on: boolean
    setOn: (on: boolean)=>void
}

export function OnOffLamp (props: LampProps) {
    let {on, setOn} = props

    const OnStyle = {
        marginLeft: "30px",
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "red",
    };
    const OffStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "red" : "green"
    };
    const LampStyle = {
        width: "15px",
        height: "15px",
        border: "1px solid black",
        borderRadius: "50px",
        display: "inline-block",
        // magrin: "400px",
        padding: "1px",
        backgroundColor: on ? "yellow" : "white",
        marginLeft: "5px",
        // marginTop: "50px",
    };
    type LampTypeStyle = {
        width: string,
        height: string,
        border: string,
        borderRadius?: string,
        display: string,
        margin?: string,
        padding?: string,
        backgroundColor: string,
        marginLeft: string,
        marginTop: string,
    }
    type OffTypeStyle = {
        width: string,
        height: string,
        border: string,
        display: string,
        padding: string,
        backgroundColor: string,
    }
    type OnTypeStyle = {
        marginLeft: string,
        width: string,
        height: string,
        border: string,
        display: string,
        padding: string,
        backgroundColor: string,
        marginTop: string,
    }

    return (
        <div>
            <div style={OnStyle} onClick={()=>setOn(true)}>On</div>
            <div style={OffStyle} onClick={()=>setOn(false)}>Off</div>
            <div style={LampStyle}></div>
        </div>
    )
}