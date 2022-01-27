import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemsType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: string) => void
    items: ItemsType[]
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoverElementValue, setHoverElementValue] = useState(props.value)

    const selectedItems = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoverElementValue)

    useEffect(() => {
        setHoverElementValue(props.value);
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoverElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            props.onChange(props.items[0].value)
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }
    const toggleItems = () => setActive(!active)
    const itemCkicked = (value: string) => {
        props.onChange(value);
        setActive(!active)
    }

    return (
        <div
            onKeyUp={onKeyUp}
            tabIndex={0}
            className={s.select}>
            <span
                className={s.main}
                onClick={toggleItems}
            >{selectedItems && selectedItems.title}</span>
            {active &&
                <div className={s.items}>
                    {props.items.map(m => <div
                        onMouseEnter={() => setHoverElementValue(m.value)}
                        className={s.item + ' ' + (hoveredItem === m ? s.select : '')}
                        key={m.value}
                        onClick={() => itemCkicked(m.value)}
                    >{m.title}</div>)}
                </div>
            }
        </div>

    )
}