import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SimpleExapmle')

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
    })


    return <>
    Hello, {counter}
        <button onClick={()=>setCounter(counter+1)}>ADD</button>
    </>
}