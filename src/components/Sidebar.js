import React from 'react';
import Brand from './sidebar/Brand';
import Navitem from './sidebar/Dashboard';
import Pages from './sidebar/Pages';
import Charts from './sidebar/Charts';
import Tables from './sidebar/Tables';

function Sidebar(){
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Brand/>
            <hr className="sidebar-divider my-0"/>
            <Navitem />
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">Actions</div>
            <Pages />
            <Charts />
            <Tables />
            <hr className="sidebar-divider d-none d-md-block"></hr>
        </ul>
    );
}

export default Sidebar;