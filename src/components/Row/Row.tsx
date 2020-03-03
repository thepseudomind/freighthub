import React from 'react';
import './Row.scss';

type TRow = {
    children : Array<JSX.Element>
}
const Row : React.FunctionComponent<TRow> =(props)=>{
    return <div className="row">{props.children}</div>;
}

export default Row;