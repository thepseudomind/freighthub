import React, { useState } from 'react';
import './AccordionTab.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export interface AccordionTabProps{
    title : string,
    message?: string,
    content?: any
}

const AccordionTab : React.FunctionComponent<AccordionTabProps> = ({title, message, content})=>{
    const [activeTab, setTabStatus] = useState(false);

    const renderContent = ()=>{
        const details = [];
        for (const key in content) {
           details.push(
            <p key={key}>
                <span className="accordion__tab--content--title">{key}:</span>
                <span>{`${content[key]}`}</span>
            </p>
           ); 
        }
        return details;
    }

    return (
        <div className="accordion__tab">
            <div className="accordion__tab--title" onClick={()=>setTabStatus(!activeTab)}>
                <span>{title}</span>
                <FontAwesomeIcon icon={activeTab ? faAngleDown : faAngleRight}/>
            </div>
            <div className={`accordion__tab--content${activeTab ? ' active' : ''}`}>
                {content ? renderContent() : message}
            </div>
        </div>
    );
}

export default AccordionTab;