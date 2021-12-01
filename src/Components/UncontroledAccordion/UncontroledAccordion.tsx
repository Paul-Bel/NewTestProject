import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
    // collapsed: boolean
}
let collapsed = false;
function UncontroledAccordion(props: AccordionPropsType) {
    // debugger
const [on, setOn] = useState(false)
collapsed = on;

        return  <div>
            <AccordionTitle title={props.titleValue} setOn={()=>setOn(!collapsed)} />

            { !collapsed && <AccordionBody/>}
        </div>
}

type AccordionTitlePropsType = {
    title: string;
    // collapsed: boolean
    setOn: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("Title - START!");
    return (
        <h3 onClick={()=> props.setOn()}>{props.title}</h3>
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

export default UncontroledAccordion;