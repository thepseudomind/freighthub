import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { ShipmentObject, ShipmentDetailObject } from '../../types/types';
import './shipmentDetail.scss';
import Accordion from '../../components/Accordion/Accordion';
import AccordionTab from '../../components/AccordionTab/AccordionTab';

type TShipmentParams = { id: string };
 
const ShipmentDetailPage : React.FunctionComponent<RouteComponentProps<TShipmentParams>> = ({match})=>{
    const [shipmentDetail, setShipment] = useState<ShipmentObject>(
        {
            id : "",
            name : "",
            mode : "",
            type: "",
            total: 0,
            status: "",
            origin: "",
            destination: "",
            cargo: []
        }
    );

    useEffect(()=>{
        fetch(`${process.env.SHIPMENT_API}/${match.params.id}`)
        .then(res => res.json())
        .then((data: ShipmentObject) => setShipment(data));
    }, []);

    return (
        <section className="shipment__detail">
            <h1>{shipmentDetail.name}</h1>
            <Accordion>
                {
                    shipmentDetail.cargo.map((v: ShipmentDetailObject, i)=>{
                        return <AccordionTab key={v.type} title={v.type} content={{description: v.description, volume: v.volume}}/>
                    })
                }
            </Accordion>
            {console.log(shipmentDetail)}
        </section>
    );
}

export default ShipmentDetailPage;