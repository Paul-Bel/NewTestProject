import React from "react";

export default {
    title: 'ReactMemoDemo'
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const Users = (props: {users: Array<string>}) => {
    return <div>
        {props.users.map((m, i) => <div key={i}>{m}</div>)}
    </div>
}
export const Example1 = () => {

    return <>
        <Counter count={10}/>
        <Users users={['Dima', 'Vitya', 'Kolya']}/>
    </>
}