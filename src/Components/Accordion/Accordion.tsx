import React, {useState} from "react";

type ItemType = {
    title: string, value: number
}

export type AccordionPropsType = {
    titleValue: string;
    CallCollapsed: ()=>void
    collapsed: boolean
    forStory?: ()=>void
    item: Array<ItemType>
}

export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={props.CallCollapsed}/>
        {props.collapsed && <AccordionBody item={props.item}/>}
    </div>
}

export type AccordionTitlePropsType = {
    title: string;
    setCollapsed: ()=>void

    // collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const test = () => alert("rabotaet")
    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
    )
}

type BodyType = {
    item: Array<{title: string, value: number}>
}

function AccordionBody(props: BodyType) {
    console.log("Body START!!")
    return (
        <ul>
            {props.item.map(m => {
           return (
                <li> Friend {m.value} *  Name: {m.title}</li>

                )}
            )}
            {/*<li>1</li>*/}
            {/*<li>2</li>*/}
            {/*<li>3</li>*/}
            {/*<li>4</li>*/}
        </ul>
    )
}

export default Accordion;