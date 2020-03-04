import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { ShipmentObject, ShipmentDetailObject } from '../../types/types';
import './shipmentDetail.scss';
import Accordion from '../../components/Accordion/Accordion';
import AccordionTab from '../../components/AccordionTab/AccordionTab';
import DetailCard from '../../components/DetailCard/DetailCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type TShipmentParams = { id: string };
 
const ShipmentDetailPage : React.FunctionComponent<RouteComponentProps<TShipmentParams>> = ({match, history})=>{
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
            userId: "",
            services: [],
            cargo: []
        }
    );
    const [editMode, toggleEdit] = useState(false);
    const [newName, setName] = useState('');

    useEffect(()=>{
        fetch(`${process.env.SHIPMENT_API}/${match.params.id}`)
        .then(res => res.json())
        .then((data: ShipmentObject) => setShipment(data));
    }, [shipmentDetail.name]);

    const updateName = (newName: string)=>{
        const dataToPost = {
            name: newName
        };
        fetch(`${process.env.SHIPMENT_API}/${match.params.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToPost)
        })
        .then(res => {
            res.json();
            toggleEdit(false);
            setShipment(Object.assign({}, shipmentDetail, {name: newName}));
        });
    }

    return (
        <section className="shipment__detail">
            <div className="shipment__detail--row center">
                <div className="shipment__edit" onClick={history.goBack}><FontAwesomeIcon icon={faArrowLeft} size="2x"/></div>
                {editMode ? <form><input type="text" defaultValue={shipmentDetail.name} className="shipment__input" onChange={(e: any)=>{if(e.target.value !== '') setName(e.target.value)}}/><a href="#" onClick={()=>updateName(newName)} className="shipment__button">Submit</a></form> : <h1 className="shipment__heading">{shipmentDetail.name}</h1>}
                <div className="shipment__edit" onClick={()=>toggleEdit(!editMode)}><FontAwesomeIcon icon={editMode ? faTimes : faPencilAlt} size="2x"/></div>
            </div>
            <div className="shipment__detail--row">
                <DetailCard title="id" info={shipmentDetail.id}/>
                <DetailCard title="userId" info={shipmentDetail.userId}/>
                <DetailCard title="mode" info={shipmentDetail.mode}/>
                <DetailCard title="type" info={shipmentDetail.type}/>
                <DetailCard title="total" info={shipmentDetail.total}/>
                <DetailCard title="status" info={shipmentDetail.status}/>
            </div>
            <div className="shipment__detail--row">
                <DetailCard title="status" info={shipmentDetail.origin} reduceSubtitle={true}/>
                <DetailCard title="status" info={shipmentDetail.destination} reduceSubtitle={true}/>
                <Accordion title="services">
                    {
                        shipmentDetail.services.map((v: ShipmentDetailObject, i)=>{
                            return <AccordionTab key={i} title="service" content={{type: v.type}}/>
                        })
                    }
                </Accordion>
                <Accordion title="cargo">
                    {
                        shipmentDetail.cargo.map((v: ShipmentDetailObject, i)=>{
                            return <AccordionTab key={i} title={v.type} content={{description: v.description, volume: v.volume}}/>
                        })
                    }
                </Accordion>
            </div>
        </section>
    );
}

export default ShipmentDetailPage;