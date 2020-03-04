import React from 'react';
import './DetailCard.scss';

interface IDetailCard{
    title: string,
    info: string | number,
    reduceSubtitle?: boolean
}

const DetailCard : React.FunctionComponent<IDetailCard> = ({title, info, reduceSubtitle})=>{
    return (
        <div className="detail__card">
            <div className="detail__card--title">{title}</div>
            <div className={`detail__card--subtitle${reduceSubtitle ? ' long' : ''}`}>{info}</div>
        </div>
    );
}

export default DetailCard;