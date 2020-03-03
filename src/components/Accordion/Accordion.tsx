import React from 'react';
import './Accordion.scss';

interface AccordionProps {
    children : Array<JSX.Element> | JSX.Element
}

const Accordion : React.FunctionComponent<AccordionProps> = (props)=>{
    return (
        <div className="accordion">
            {props.children}
        </div>
    );
}

export default Accordion;