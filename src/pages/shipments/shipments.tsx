import React, { useState, useEffect } from 'react';
import './shipments.scss';
import ShipmentTable from '../../components/ShipmentTable/ShipmentTable';
import Paginator from '../../components/Paginator/Paginator';
import { ShipmentObject } from '../../types/types';
import Row from '../../components/Row/Row';

const ShipmentPage : React.FunctionComponent = ()=>{
    const [shipments, fetchShipments] = useState<Array<ShipmentObject>>([]);
    const [filteredShipments, setFilteredShipments] = useState<Array<ShipmentObject>>([]);
    const [sort, chooseSortCategory] = useState('');
    const [order, chooseOrder] = useState('');
    const [searchMode, startSearch] = useState(false)
    const [numOfPages, setNumOfPages] = useState(0);
    const [pageToFetch, setPage] = useState(1);

    useEffect(()=>{
        fetch(`${process.env.SHIPMENT_API}`)
        .then(res => res.json())
        .then((data: []) => setNumOfPages(Math.ceil(data.length/20)))
    }, []);

    useEffect(()=>{
        fetch(urlToFetch())
        .then(res => res.json())
        .then((data: []) => {
            fetchShipments(data);
            setFilteredShipments(data);
        })
    }, [pageToFetch, sort, order]);

    const urlToFetch = ()=>{
        if(sort === '' && order === ''){
            return `${process.env.SHIPMENT_API}/?_page=${pageToFetch}&_limit=20`;
        }else if(sort === 'name' && order === ''){
            return `${process.env.SHIPMENT_API}/?_page=${pageToFetch}&_limit=20&_sort=name`;
        }else if(sort === 'name' && order === 'asc'){
            return `${process.env.SHIPMENT_API}/?_page=${pageToFetch}&_limit=20&_sort=name&_order=asc`;
        }else if(sort === 'name' && order === 'desc'){
            return `${process.env.SHIPMENT_API}/?_page=${pageToFetch}&_limit=20&_sort=name&_order=desc`;
        }else if(sort === 'id' && order === ''){
            return `${process.env.SHIPMENT_API}/?_page=${pageToFetch}&_limit=20&_sort=id`;
        }else if(sort === 'id' && order === 'asc'){
            return `${process.env.SHIPMENT_API}/?_page=${pageToFetch}&_limit=20&_sort=id&_order=asc`;
        }else if(sort === 'id' && order === 'desc'){
            return `${process.env.SHIPMENT_API}/?_page=${pageToFetch}&_limit=20&_sort=id&_order=desc`;
        }else if(sort === '' && order === 'asc'){
            return `${process.env.SHIPMENT_API}/?_page=${pageToFetch}&_limit=20&_sort=id&_order=asc`;
        }else if(sort === '' && order === 'desc'){
            return `${process.env.SHIPMENT_API}/?_page=${pageToFetch}&_limit=20&_sort=id&_order=desc`;
        }else{
            return `${process.env.SHIPMENT_API}/?_page=${pageToFetch}&_limit=20`; 
        }
    }

    const searchShipment = (e: any)=>{
        if(e.target.value !== ''){
            startSearch(true);
            let searchResults = [];
            searchResults = shipments.filter((v: ShipmentObject, i)=>{
                if(v.id.toLowerCase().includes(e.target.value) || v.id.includes(e.target.value)){
                    return v;
                }
            });
            setFilteredShipments(searchResults);
        }else{
            startSearch(false);
            setFilteredShipments(shipments);
        }
    }

    const sortBy = (e: any)=> (chooseSortCategory(e.target.value));

    const orderBy = (e: any)=> (chooseOrder(e.target.value));

    return (
        <section className="shipments">
            <Row>
                <h1 className="shipments__heading">Shipments list</h1>
                <div className="shipments__filter--group">
                    <span>
                        <label htmlFor="filter" className="shipments__filter--name">Sort by:</label>
                        <select className="shipments__filter" name="filter" id="filter" defaultValue="" onChange={sortBy}>
                            <option value="" disabled={true}>--</option>
                            <option value="id">ID</option>
                            <option value="name">Name</option>
                        </select>
                    </span>
                    <span>
                        <label htmlFor="filter" className="shipments__filter--name">Order:</label>
                        <select className="shipments__filter" name="order" id="order" defaultValue="" onChange={orderBy}>
                            <option value="" disabled={true}>--</option>
                            <option value="asc">Asc</option>
                            <option value="desc">Desc</option>
                        </select>
                    </span>
                </div>
                <input type="search" onChange={searchShipment} className="shipments__search" placeholder="Search for shipments by ID e.g. S1009"/>
            </Row>
            {filteredShipments.length === 0 ? <h1 className="shipments__error">No shipments found...<span>😢</span></h1> : <ShipmentTable shipments={filteredShipments}/>}
            <Paginator pages={numOfPages} setPage={setPage} pageToFetch={pageToFetch} searchMode={searchMode}/>
        </section>
    );
}

export default ShipmentPage;