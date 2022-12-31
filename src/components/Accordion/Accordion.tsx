import React from 'react';

function Accordion() {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle />
            <AccordionBody />
        </div>
    )
}

function AccordionTitle() {
    console.log('rendering AccordionTitle')
    return (
        <h3>Menu</h3>
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