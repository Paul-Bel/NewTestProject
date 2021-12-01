import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
    setCollapsed: ()=>void
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed}/>
        {props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
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

function AccordionBody() {
    console.log("Body START!!")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}

export default Accordion;