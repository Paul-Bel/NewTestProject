import React, {useMemo, useState} from "react";


export default {
    title: 'useMemo'
}

export const ExampleA = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    useMemo(()=>{
        let facke = 0
        while (facke<100000000){let y = Math.random(); facke++}
    }, [a])

    for (let i = 1; i <= a; i++) {
        resultA *= i
    }
    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}
