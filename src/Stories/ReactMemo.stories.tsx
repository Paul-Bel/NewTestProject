import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'ReactMemoDemo'
}

const CounterSecret = (props: { count: number }) => {
    console.log('Counter')
    return <div>{props.count}</div>
}
const Counter = React.memo(CounterSecret)
const UsersSecret = (props: {
    users: Array<string>,
    value: string,
    setValue: (value: string) => void
    addUsers?: () => void
}) => {
    console.log('users')
    return <div>
        <input
            value={props.value}
            onChange={(e) => props.setValue(e.currentTarget.value)}
        />
        <button onClick={props.addUsers}>ADD USER</button>
        {props.users.map((m, i) => <div key={i}>{m}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Vitya', 'Kolya'])
    const [value, setValue] = useState('')

    let filtrUsers = useMemo(() => {
        return users.filter(f => f.toLocaleLowerCase().indexOf('a') > -1)
    }, [users])

    let setV = useCallback((v:string)=>{setValue(v)}, [])

    const addUsers = () => {

        setUsers([...users, value]);
        console.log(users)
        setValue('')
    }
    let addUs = useCallback(()=>{addUsers()},[value, users])
    return <>
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        <Counter count={counter}/>
        <Users users={filtrUsers} value={value}
               setValue={setV}
               addUsers={addUs}
        />
    </>
}