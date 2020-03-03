import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './app.scss'
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';


const App : React.FunctionComponent = ()=>{
    return (
        <Router>
            <Navbar/>
            <Main/>
        </Router>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('app') as HTMLElement
);
