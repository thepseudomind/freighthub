import React from 'react';
import './Paginator.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface PaginatorProps{
    pages : number,
    pageToFetch: number,
    setPage: any,
    searchMode: boolean
}

const Paginator : React.FunctionComponent<PaginatorProps> = ({pages, setPage, pageToFetch, searchMode})=>{
    const renderButtons = (numberOfPages: number)=>{
        const numberOfButtons : Array<number> = [];
        for(let i=1; i <= numberOfPages; i++){
            numberOfButtons.push(i);
        }
        return numberOfButtons.map((v, i)=> <div key={i} id={i.toString()} onClick={()=>setPage(v)} className={pageToFetch === v ? 'paginator__items active' : 'paginator__items'}>{v}</div>);
    }

    return (
        searchMode ? <span></span> :
        <div className="pagination">
            <div className="paginator__arrows" onClick={()=>(pageToFetch > 1) ? setPage(pageToFetch-1) : setPage(pageToFetch)}><FontAwesomeIcon icon={faAngleLeft}/></div>
            <div className="paginator">
                {renderButtons(pages)}
            </div>
            <div className="paginator__arrows" onClick={()=>(pageToFetch < pages) ? setPage(pageToFetch+1) : setPage(pageToFetch)}><FontAwesomeIcon icon={faAngleRight}/></div>
        </div>
    );
}

export default Paginator;

