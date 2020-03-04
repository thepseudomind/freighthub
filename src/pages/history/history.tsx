import React, { useState, useEffect } from 'react';
import './history.scss';
import ShipmentTable from '../../components/ShipmentTable/ShipmentTable';
import { ShipmentObject } from '../../types/types';

const HistoryPage : React.FunctionComponent =()=>{
    // Assuming the user has an ID of U1000
    const [usersShipment, fetchShipment] = useState<Array<ShipmentObject>>([]);
    useEffect(()=>{
        fetch(`${process.env.SHIPMENT_API}`)
        .then(res => res.json())
        .then((data: []) => {
            const userData = data.filter((v: ShipmentObject, i)=>{
                if(v.userId = 'U1000'){
                    return v;
                }
            });
            fetchShipment(userData);
        });
    }, []);

    return (
        <div className="history">
            <h1 className="history__heading">My shipments</h1>
            <ShipmentTable shipments={usersShipment}/>
        </div>
    );
}

export default HistoryPage;