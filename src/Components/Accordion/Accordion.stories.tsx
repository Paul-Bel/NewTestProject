import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from './Accordion'
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
}
let callback = action('accordion want change')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleValue: "Menu",
    collapsed: true,
    CallCollapsed: () => {
    },
    item: []
}

export const UserCollapsedMode = Template.bind({})
UserCollapsedMode.args = {
    titleValue: "User",
    collapsed: false,
    CallCollapsed: () => {
    },
    item: []
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={"Menu"}
        CallCollapsed={() => setValue(!value)}
        collapsed={value} item={[
        {title: "Anton", value: 1},
        {title: "Dima", value: 2},
        {title: "Denis", value: 3},
        {title: "Tolya", value: 4},]}
    />
}
