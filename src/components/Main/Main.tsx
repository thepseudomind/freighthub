import React, { Suspense } from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';
import HistoryPage from '../../pages/history/history';

const HomePage = React.lazy(()=> import('../../pages/home/home'));
const ShipmentPage = React.lazy(()=> import('../../pages/shipments/shipments'));
const ShipmentDetailPage = React.lazy(()=> import('../../pages/shipmentDetail/shipmentDetail'));

const Main : React.FunctionComponent = ()=>{
    return (
        <main className="main">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/shipments" component={ShipmentPage}></Route>
                    <Route path="/shipment/:id" component={ShipmentDetailPage}></Route>
                    <Route path="/history" component={HistoryPage}></Route>
                </Switch>
            </Suspense>
        </main>
    );
}

export default Main;