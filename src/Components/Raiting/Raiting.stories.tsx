import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating, RatingPropsType} from "./Raiting";

export default {
    title: 'Raiting',
    component: Rating,
}

export const ComponentRaiting = () => <Rating value={0} setValue={x=>x}/>
export const Raiting1 = () => <Rating value={1} setValue={x=>x}/>
export const Raiting2 = () => <Rating value={2} setValue={x=>x}/>
export const Raiting3 = () => <Rating value={3} setValue={x=>x}/>
export const Raiting4 = () => <Rating value={4} setValue={x=>x}/>
export const Raiting5 = () => <Rating value={5} setValue={x=>x}/>
export const RaitingChange = () => {
    const [raiting, setRaiting] = useState<RatingPropsType>(0)
    return (
    <Rating value={raiting} setValue={setRaiting}/>
    )
}