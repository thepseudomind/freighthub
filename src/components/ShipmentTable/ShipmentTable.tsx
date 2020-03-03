import React from 'react';
import './ShipmentTable.scss';
import { ShipmentObject } from '../../types/types';
import { Link } from 'react-router-dom';

interface ShipmentTableProps {
    shipments: Array<ShipmentObject>
}

const ShipmentTable : React.FunctionComponent<ShipmentTableProps> = ({shipments})=>{
    return (
        <div className="table">
            <div className="table__head">
                <span>Name</span>
                <span>Mode</span>
                <span>Type</span>
                <span>Origin</span>
                <span>Destination</span>
                <span>Total</span>
                <span>Status</span>
            </div>
            <div className="table__body">
                {
                    shipments.map((v : ShipmentObject, i) => {
                        return (
                            <Link to={`/shipment/${v.id}`} key={v.id} id={v.id} className="table__body--items">
                                <p>{v.name}</p>
                                <p className="table__body--items--mode">{v.mode}</p>
                                <p>{v.type}</p>
                                <p>{v.origin}</p>
                                <p>{v.destination}</p>
                                <p>{v.total}</p>
                                <p>{v.status}</p>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ShipmentTable;