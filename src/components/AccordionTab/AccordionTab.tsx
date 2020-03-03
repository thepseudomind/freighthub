import React, { useState } from 'react';
import './AccordionTab.scss';

interface AccordionTabProps{
    title : string,
    message?: string,
    content?: any
}

const AccordionTab : React.FunctionComponent<AccordionTabProps> = ({title, message, content})=>{
    const [activeTab, setTabStatus] = useState(false);

    const renderContent = ()=>{
        const details = [];
        for (const key in content) {
           details.push(<p key={key}>{`${key}: ${content[key]}`}</p>); 
        }
        return details;
    }

    return (
        <div className="accordion__tab">
            <div className="accordion__tab--title" onClick={()=>setTabStatus(!activeTab)}>
                {title}
            </div>
            <div className={`accordion__tab--content${activeTab ? ' active' : ''}`}>
                {content ? renderContent() : message}
            </div>
        </div>
    );
}

export default AccordionTab;