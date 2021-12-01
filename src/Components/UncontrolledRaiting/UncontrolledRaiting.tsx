import React, {useState} from "react";


type RatingPropsType = {
    value?: 0 | 1 | 2 | 3 | 4 | 5;
}

export function Rating(props: RatingPropsType) {
    console.log("Function Start Pusk");
    let value = 0;
    const [select, setSelect] = useState(0)
    value = select;
    return (
        <div>
            <Star selected={value > 0} setSelect={setSelect} value={1}/>
            <Star selected={value > 1} setSelect={setSelect} value={2}/>
            <Star selected={value > 2} setSelect={setSelect} value={3}/>
            <Star selected={value > 3} setSelect={setSelect} value={4}/>
            <Star selected={value > 4} setSelect={setSelect} value={5}/>

        </div>);
}

type StarPropsType = {
    selected: boolean
    setSelect: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}

export function Star(props: StarPropsType) {
    return <span onClick={() => props.setSelect(props.value)} >
         {props.selected ? <b>star </b> : "star "}
    </span>
}