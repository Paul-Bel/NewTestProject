import React from "react";
import {Select} from "../Select/Select";

type ItemType = {
    title: string, value: number
}
export type AccordionPropsType = {
    titleValue: string;
    onChange: ()=>void
    collapsed: boolean
    forStory?: ()=>void
    item: Array<ItemType>
    onClick: (id: string | number) => void
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle
            title={props.titleValue}
            setCollapsed={props.onChange}
        />
        {props.collapsed && <AccordionBody item={props.item} onClick={props.onClick}/>}
    </div>
}

export type AccordionTitlePropsType = {
    title: string;
    setCollapsed: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
    )
}

type BodyType = {
    item: Array<{title: string, value: number}>
    onClick: (id: string | number) => void
}

function AccordionBody(props: BodyType) {
    const onClick = (e: string | number) => {
    props.onClick(e)
    }
    return <div>
        <ul>
            {props.item.map((m, index) => {
           return (
                <li
                    onClick={()=>onClick(m.title)}
                    key={index}
                > Friend {m.value} *  Name: {m.title}</li>
                )}
            )}
        </ul>
        {/*<Select item={props.item} />*/}
        </div>
}

export default Accordion;