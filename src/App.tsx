import React, {useState} from 'react';
import s from './App.module.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingPropsType, Star} from "./Components/Raiting/Raiting";
import {OnOffLamp} from "./Components/OnOffLamp/OnOffLamp";

function App() {
const [value, setValue] = useState<RatingPropsType>(0)
    const [collapsed, setCollapsed] = useState(true)
    let [on, setOn] = useState<boolean>(true)

    // for Lamp
    return (
        <div className={s.App}>
            <input/>
            <input type="password"/>
            <div>Article 1</div>
            {<Accordion titleValue={'Menu'} setCollapsed={()=>setCollapsed(!collapsed)} collapsed={collapsed} />}
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