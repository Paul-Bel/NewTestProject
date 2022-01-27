import React, {useState} from 'react';
import s from './App.module.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingPropsType} from "./Components/Raiting/Raiting";
import {OnOffLamp} from "./Components/OnOffLamp/OnOffLamp";

function App() {
const [value, setValue] = useState<RatingPropsType>(0)
    const [collapsed, setCollapsed] = useState(true)
    const CallCollapsed = () => setCollapsed(!collapsed)
    let [on, setOn] = useState<boolean>(true)

    const [item, setItem] = useState([
    {title: "Anton", value: 1},
    {title: "Dima", value: 2},
    {title: "Denis", value: 3},
    {title: "Tolya", value: 4},
    ])


    // for Lamp
    return (
        <div className={s.App}>
            <input/>
            <input type="password"/>
            <div>Article 1</div>
            {<Accordion
                titleValue={'Menu'}
                onChange={CallCollapsed}
                collapsed={collapsed}
                item={item}
            />}
            <Rating value={value} setValue={setValue}/>
            <OnOffLamp setOn={setOn} on={on}/>

            {/*______________________________________________________________*/}
            {/*{<Accordion titleValue={'Use Menu'} />}*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"User Menu"} collapsed={false}/>*/}
            {/*Article 2*/}
        </div>
    );
}



export default App;