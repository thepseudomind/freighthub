import React from 'react';
import './Accordion.scss';

export interface AccordionProps {
    title?: string,
    children : Array<JSX.Element> | JSX.Element
}

const Accordion : React.FunctionComponent<AccordionProps> = (props)=>{
    return (
        <div className="accordion">
            <h1 className="accordion__heading">{props.title}</h1>
            {props.children}
        </div>
    );
}

export default Accordion;