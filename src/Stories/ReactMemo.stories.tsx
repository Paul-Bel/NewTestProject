import React, {useState} from "react";

export default {
    title: 'ReactMemoDemo'
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>
        {props.users.map((m, i) => <div key={i}>{m}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Vitya', 'Kolya'])
    return <>
        <button onClick={()=>setCounter(counter+1)}>{counter}</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}