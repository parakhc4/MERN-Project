import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './MainHeader.js';
import './MainNavigation.css';
import MainHeader from './MainHeader.js';
import NavLinks from './NavLinks.js';
import SideDrawer from './SideDrawer.js';
import Backdrop from '../UIElements/Backdrop.js';

const MainNavigation = props =>{
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {setDrawerIsOpen(true)};

    const closeDrawer = () => {setDrawerIsOpen(false)};

    return (
        // React.fragment is built just for those cases 
        // where u need to render two things on screen
        //but JS has a limitation of only rendering one js
        // object. Hence, it acts as a wrapper
    <React.Fragment>

        {drawerIsOpen && <Backdrop onClick = {closeDrawer}/>}
        
        {/* Check if drawerIsOpen, if yes then show otherwise null */}
        {/* BAsically an AND operation to check */}
        {drawerIsOpen && 
        (<SideDrawer>
            <nav className ="main-navigation__drawer-nav">
                <NavLinks/>
            </nav>
        </SideDrawer>
        )}
        
        <MainHeader>
            {/* Anything entered between MainHeader 
            is forwarded to props.children*/}
            <button className="main-navigation__menu-btn" onClick={openDrawer}>
                <span/>
                <span/>
                <span/>
            </button>
        <h1 className = "main-navigation__title">
            <Link to="/">Your Places</Link>
        </h1>

        <nav className = "main-navigation__header-nav">
            <NavLinks/>
        </nav>
        </MainHeader>
    </React.Fragment>
)};


export default MainNavigation;