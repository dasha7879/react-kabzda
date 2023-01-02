import { OmitProps } from 'antd/lib/transfer/ListBody';
import React from 'react';
type AccordionPropsType = {
    titleValue: string;
    collapsed:boolean;
}
function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue} />
        </div>
    }
    return (
        <div>
        <AccordionTitle title={props.titleValue} />
        <AccordionBody />
    </div>
    )
}

type AccorionTitlePropsType = {
    title: string;
}
function AccordionTitle(props: AccorionTitlePropsType) {
    console.log('rendering AccordionTitle')
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('rendering AccordionBody')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default Accordion;