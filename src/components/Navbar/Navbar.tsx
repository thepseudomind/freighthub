import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import user from '../../images/ME.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBoxOpen, faHistory, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar : React.FunctionComponent = ()=>{
    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar__logo">freighthub</NavLink>
            <ul className="navbar__menu">
                <li className="navbar__menu--items">
                    <NavLink exact to="/" activeClassName="navbar__menu--link active" className="navbar__menu--link">
                        <FontAwesomeIcon icon={faHome} className="navbar__menu--icon"/>
                        <span>home</span>
                    </NavLink>
                </li>
                <li className="navbar__menu--items">
                    <NavLink exact to="/shipments" activeClassName="navbar__menu--link active" className="navbar__menu--link">
                        <FontAwesomeIcon icon={faBoxOpen} className="navbar__menu--icon"/>
                        <span>shipments</span>
                    </NavLink>
                </li>
                <li className="navbar__menu--items">
                    <NavLink exact to="/history" activeClassName="navbar__menu--link active" className="navbar__menu--link">
                        <FontAwesomeIcon icon={faHistory} className="navbar__menu--icon"/>
                        <span>history</span>
                    </NavLink>
                </li>
            </ul>
            <div className="navbar__profile">
                <img src={user} className="navbar__profile--avatar"/>
                <p className="navbar__profile--user">aline carmelini</p>
                <FontAwesomeIcon icon={faCaretDown}/>
            </div>
        </nav>
    );
}

export default Navbar;