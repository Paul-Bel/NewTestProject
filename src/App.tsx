import React, {useState} from 'react';
import s from './App.module.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingPropsType, Star} from "./Components/Raiting/Raiting";
import {OnOff} from "./Components/OnOffLamp/OnOffLamp";

function App() {
const [value, setValue] = useState<RatingPropsType>(0)
    const [collapsed, setCollapsed] = useState(true)

    return (
        <div className={s.App}>
            <input/>
            <input type="password"/>
            <div>Article 1</div>
            {<Accordion titleValue={'Menu'} setCollapsed={()=>setCollapsed(!collapsed)} collapsed={collapsed} />}
            <Rating value={value} setValue={setValue}/>
            <OnOff/>

            {/*______________________________________________________________*/}
            {/*{<Accordion titleValue={'Use Menu'} />}*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"User Menu"} collapsed={false}/>*/}
            {/*Article 2*/}
        </div>
    );
}



export default App;